const middleware = require('../middleware')
const { User } = require('../models')

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email
    })
    if (
      user &&
      (await middleware.comparePassword(user.password_digest, req.body.password))
    ) {
      let payload = {
        id: user._id,
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
    let password_digest = await middleware.hashPassword(password)
    const user = await new User({ email, password_digest, first_name: firstName, last_name: lastName, username, red_score: 0, blue_score: 0, indigo: 0 });
    await user.save()
    return res.status(201).json({ user });
    // res.send(user)
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
        user.dataValues.password_digest,
        req.body.oldPassword
      ))
    ) {
      let password_digest = await middleware.hashPassword(req.body.newPassword)

      await user.updateOne({ password_digest }) //may have to use save or findbyIdandupate or updateOne
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