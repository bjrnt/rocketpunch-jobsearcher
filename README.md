# Rocketpunch Job Searcher
A web app for performing full-text search on job ads posted on RocketPunch.

**Note:** no code for scraping job posts from RocketPunch is provided together with this. There are however three example job posts in `private/job_listings.json` that will be loaded by default. If there is interest, I may host the application with a full list of job ads.

There's currently no way to perform full-text search on job ads posted on Rocket Punch, making it difficult to seach based on keywords that are mentioned inside the posts themselves. This was made as a demo app both to enable full-text search on all fields of job ads, as well as try out some new frameworks.

This app consists of a front-end built with [React.js](https://facebook.github.io/react/) and [Bootstrap](http://getbootstrap.com/) based on [Meteor.js](https://www.meteor.com/), which in turn uses [MongoDB](https://www.mongodb.org/) to store data. A text index is built on the database collection to allow for fast full-text search.

## Running

Clone the repository, install Meteor.js, and simply run `meteor`. Browse to `http://localhost:3000` to access the app. Any keywords entered into the search box will be used to filter job ads.
