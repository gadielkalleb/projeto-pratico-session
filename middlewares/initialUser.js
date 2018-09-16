const User = require('../models/user')

module.exports = async () => {
  const isUserRoot = await User.count({ username: "root" })
  if (isUserRoot === 0) {
    const user = new User({
      "username": "root",
      "password": "1Pieceluffy",
      "role": ["restrito", "admin"]
    })
    await user.save(() => console.log('User root Created!!!!'))
  } else {
    console.log('User root is load')
  }
}
