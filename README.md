# RocketPunch Job Searcher
A web app for performing full-text search on job ads posted on RocketPunch.

**Note:** no code for scraping job ads from RocketPunch is provided together with this. There are three example job ads in `private/job_listings.json` that will be loaded by default. There is a live version of this running with a mostly complete list of job ads at [bjrn.io/rpjs](http://bjrn.io/rpjs/). Also note that the service is completely in Korean.

#### Motivation

The current full-text search functionality on RocketPunch is slow and gives inaccurate results, making it difficult to search based on keywords that are mentioned inside the ads themselves. This app was made as a demo app both to enable full-text search on all fields of job ads, as well as try out some new frameworks.

This app consists of a front-end built with [React.js](https://facebook.github.io/react/) and [Bootstrap](http://getbootstrap.com/) based on [Meteor.js](https://www.meteor.com/), which in turn uses [MongoDB](https://www.mongodb.org/) to store data. A text index is built on the database collection to allow for fast full-text search using the `$text` operator in MongoDB.

## Running

1. Install Meteor.js
2. Clone the repository
3. Run `meteor` in the app root
4. Browse to `http://localhost:3000` to access the app

Any keywords entered into the search box will be used to filter job ads.

