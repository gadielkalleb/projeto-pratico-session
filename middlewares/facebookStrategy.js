require('dotenv').config()
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy

const User = require('../models/user')

passport.use(new FacebookStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: process.env.CALLBACK_URL,
  profileFields: ['id', 'displayName', 'email', 'photos'],
}, async (accessToken, refreshToken, profile, done) => {
  const userDb = await User.findOne({ facebookId: profile.id })
  if (!userDb) {
    const user = new User({
      name: profile.displayName,
      facebookId: profile.id,
      role: ['restrito'],
    })
    await user.save()
    done(null, user)
  } else {
    done(null, userDb)
  }
}))

module.exports = passport
