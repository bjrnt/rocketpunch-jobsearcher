Listings = new Mongo.Collection('listings');

if(Meteor.isServer) {
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
    return Listings.find({$text: {$search: query}}, {title: 1, experience: 1, company: 1});
  });
}