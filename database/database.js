const mongoose = require('mongoose');
/* --------------------------------------------------------------------------------------------- */

// Set up Mongoose Connection
mongoose.connect(
  'mongodb://localhost/vourcher',
  { useNewUrlParser: true }
);
const db = mongoose.connection;
mongoose.Promise = Promise;
db.on('error', () => console.error('connection error:'));
/* --------------------------------------------------------------------------------------------- */

// Set up Schemas
const userSchema = new mongoose.Schema({
  name: String,
  reviews: Number,
  ratings: Number
});

const ratingSchema = new mongoose.Schema({
  rating: Number,
  review: String,
  last_updated: { type: Date, default: Date.now },
  helpfulness: Number,
  user: [userSchema]
});

const dealSchema = new mongoose.Schema({
  name: String,
  type: String,
  ratings: [ratingSchema]
});
/* --------------------------------------------------------------------------------------------- */

// Set up Models
const Deal = mongoose.model('deal', dealSchema);
const User = mongoose.model('user', userSchema);
const Rating = mongoose.model('rating', ratingSchema);
/* --------------------------------------------------------------------------------------------- */

// DB Querying Functions
const getRatings = id => {
  return Deal.find({}).then(docs => {
    let sumStars = 0;
    let ratingsQty = 0;
    docs[id].ratings.forEach(rating => {
      ratingsQty += 1;
      sumStars += rating.rating;
    });
    const average = sumStars / ratingsQty;
    return { total: ratingsQty, average };
  });
};

const getAllReviews = id => {
  return Deal.find({}).then(docs => {
    const allReviews = [];
    docs[id].ratings.forEach(rating => {
      if (rating.review !== undefined) {
        allReviews.push(rating);
      }
    });
    return allReviews;
  });
};
/* --------------------------------------------------------------------------------------------- */

// Exports
module.exports.getRatings = getRatings;
module.exports.getAllReviews = getAllReviews;
