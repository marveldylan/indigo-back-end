const middleware = require('../middleware')
const { User } = require('../models')

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email
    })
    if (
      user &&
      (await middleware.comparePassword(user.passwordDigest, req.body.password))
    ) {
      let payload = {
        id: user.id,
        email: user.email
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  try {
    const { email, password, firstName, lastName, username } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const user = await new User({ email, passwordDigest, firstName, lastName, username });
    res.send(user)
  } catch (error) {
    throw error
  }
}
const UpdatePassword = async (req, res) => {
  try {
    const user = await User.findOne({
       email: req.body.email
      })
    if (
      user &&
      (await middleware.comparePassword(
        user.dataValues.passwordDigest,
        req.body.oldPassword
      ))
    ) {
      let passwordDigest = await middleware.hashPassword(req.body.newPassword)

      await user.update({ passwordDigest }) //may have to use save or findbyIdandupate or updateOne
      return res.send({ status: 'Success', msg: 'Password Updated' })
    }
    res.status(401).send({ status: 'Error', msg: 'Invalid Credentials' })
  } catch (error) {
    throw error
  }
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}


module.exports = {
  Login,
  Register,
  UpdatePassword,
  CheckSession
}