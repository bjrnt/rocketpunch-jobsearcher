if(Meteor.isServer) {
  Meteor.startup(function() {

    // Add listings to the database if there aren't any
    if(Listings.find().count() === 0) {
      let data = JSON.parse(Assets.getText('job_listings.json'));
      data.forEach((l) => {
        Listings.insert(l);
      });
    }
  });
}
