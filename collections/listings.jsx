Listings = new Mongo.Collection('listings');

// Ugly fix - Loggly does not support unicode
var formatForeignString = (s) => { return s; };

function setupLogger(config) {
  let winston = Meteor.npmRequire('winston');
  logger = new winston.Logger({
    level: 'info',
    transports: [
      new (winston.transports.Console)()
    ]
  });

  if(config.loggly) {
    Meteor.npmRequire('winston-loggly');
    logger.add(winston.transports.Loggly, config.loggly);
    formatForeignString = (s) => { return encodeURIComponent(s) };
  }

  return logger;
}

if(Meteor.isServer) {
  let config = JSON.parse(Assets.getText('config.json'));

  logger = setupLogger(config);

  // Ensure that we have a text index on all listings so that $text queries can be used
  Listings._ensureIndex({
    "$**": "text"
  });

  Meteor.publish('search', function(searchValue) {
    if(!searchValue) {
      throw new Error('Attempting to search without a search value');
    }
    // Add \" \" around each term to ensure that queries are treated as 'a AND b AND c' by MongoDB. If this is not done it gets queried as 'a OR b OR c'
    let query = searchValue.split(' ').map((term) => {
      return '\"' + term + '\"';
    }).join(' ');

    logger.log('info', {
      query: formatForeignString(query),
      ip: this.connection.clientAddress
    });

    return Listings.find({$text: {$search: query}}, {title: 1, experience: 1, company: 1, limit: 50, sort: {timestamp: -1}});
  });
}
