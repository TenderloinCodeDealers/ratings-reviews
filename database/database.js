const mongoose = require('mongoose');
/* --------------------------------------------------------------------------------------------- */

// Set up Mongoose Connection
mongoose.connect('mongodb://localhost/test');
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
const Deal = mongoose.model('Deal', dealSchema);
const User = mongoose.model('User', userSchema);
/* --------------------------------------------------------------------------------------------- */

// DB Querying Functions
const getRatings = id => {
  return Deal.find({ id }).then(docs => {
    let sumStars = 0;
    let ratingsQty = 0;
    docs[0].ratings.forEach(rating => {
      ratingsQty += 1;
      sumStars += rating.rating;
    });
    const average = sumStars / ratingsQty;
    return { total: ratingsQty, average };
  });
};

const getAllReviews = id => {
  return Deal.find({ id }).then(docs => {
    const reviews = docs[0].ratings.reduce((allReviews, rating) => {
      if (rating.review !== undefined) {
        return allReviews.push(rating);
      }
      return allReviews;
    }, []);
    return reviews;
  });
};
/* --------------------------------------------------------------------------------------------- */

// Exports
module.exports.getRatings = getRatings;
module.exports.getAllReviews = getAllReviews;
