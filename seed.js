const faker = require('faker');
const mongoose = require('mongoose');
/* --------------------------------------------------------------------------------------------- */

// Set up Mongoose Connection
mongoose.connect(
  'mongodb://vourcher:vourcher1@ds060478.mlab.com:60478/vourcher',
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
  user: userSchema
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

// generate 30 users for use in data insertion to database
const generatedUsers = [];
for (let i = 0; i < 30; i += 1) {
  const reviewCount = Math.floor(Math.random() * 15);
  let ratingsCount = Math.floor(Math.random() * 30);
  ratingsCount = ratingsCount > reviewCount ? ratingsCount : ratingsCount + reviewCount;
  const user = {
    name: faker.name.findName(),
    reviews: reviewCount,
    ratings: ratingsCount
  };
  generatedUsers.push(new User(user));
}
/* --------------------------------------------------------------------------------------------- */

// Get a random user from the list of previously generated users for ratings
const getUsers = () => {
  const users = [...generatedUsers];
  return () => {
    const index = Math.floor(Math.random() * users.length);
    return users.splice(index, 1)[0];
  };
};
/* --------------------------------------------------------------------------------------------- */

// Create the rating sub document with the required information
const createRating = review => {
  const randomUser = getUsers();
  let ratingData = {};
  if (review) {
    ratingData = {
      rating: Math.floor(Math.random() * 5),
      review: faker.lorem.text(),
      helpfulness: Math.floor(Math.random() * 20),
      last_updated: faker.date.past,
      user: randomUser()
    };
  } else {
    ratingData = {
      rating: Math.floor(Math.random() * 5),
      user: randomUser()
    };
  }
  return new Rating(ratingData);
};
/* --------------------------------------------------------------------------------------------- */

// Create the deal sub document with the required information (up to 30 ratings)
const createDeal = type => {
  const ratings = [];
  const count = Math.floor(Math.random() * 30);
  for (let i = 0; i < count; i += 1) {
    ratings.push(createRating(Math.round(Math.random())));
  }
  const dealData = {
    name: faker.commerce.productName(),
    type,
    ratings
  };
  return new Deal(dealData);
};
/* --------------------------------------------------------------------------------------------- */

// Add 100 deals to database (50 product, 50 service)
const deals = [];
for (let i = 0; i < 100; i += 1) {
  const type = i < 50 ? 'service' : 'product';
  deals.push(createDeal(type));
}

Deal.insertMany(deals)
  .then(() => {
    console.log('Successfully created 100 deal entries in the database!');
    process.exit();
  })
  .catch(err => {
    throw err;
  });
