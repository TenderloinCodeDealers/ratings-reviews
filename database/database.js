const mongoose = require('mongoose');
/* --------------------------------------------------------------------------------------------- */

// Set up Mongoose Connection
mongoose.connect('mongodb://localhost/test');
const db = mongoose.connection;
db.on('error', () => console.error('connection error:'));
/* --------------------------------------------------------------------------------------------- */

// Set up Schemas
const ratingSchema = new mongoose.Schema({
  rating: Number,
  review: String,
  last_updated: { type: Date, default: Date.now },
  helpfulness: Number,
  user: [String]
});

const dealSchema = new mongoose.Schema({
  name: String,
  type: String,
  ratings: [ratingSchema]
});

const userSchema = new mongoose.Schema({
  name: String,
  reviews: Number,
  ratings: Number
});
/* --------------------------------------------------------------------------------------------- */

// Set up Models
const Deal = mongoose.model('Deal', dealSchema);
const User = mongoose.model('User', userSchema);
/* --------------------------------------------------------------------------------------------- */

// DB Querying Functions
const getAverageRatings = id => {
  id();
};

const getTotalRatings = id => {
  id();
};

const getAllReviews = id => {};
/* --------------------------------------------------------------------------------------------- */

// Exports
module.exports.getAverageRatings = getAverageRatings;
module.exports.getTotalRatings = getTotalRatings;
module.exports.getAllReviews = getAllReviews;
