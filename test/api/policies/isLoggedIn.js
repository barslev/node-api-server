module.exports = (req, res, next) => {
  res.set({
    'isLoggedIn': true
  })
  next()
}
