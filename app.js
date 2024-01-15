const express = require('express')
const { createHandler } = require('graphql-http/lib/use/express')
const bcrypt = require('bcrypt');
const schema = require('./graphql')
const authMiddleware = require('./config/authMiddleware')

const app = express()
app.use(express.json())

const db = require('./models')
const { JWT_SECRET } = require('./config/constants')
const jwt = require('jsonwebtoken')

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Find the user by email
  const user = await db.User.findOne({ where: { email } });

  if (!user) {
    return res.status(401).json({ message: 'No user with this email found' });
  }

  // Check the password
  const validPassword = await bcrypt.compare(password, user.password);

  // const validPassword = password === user.password;

  if (!validPassword) {
    return res.status(401).json({ message: 'Password is incorrect' });
  }

  // Create a JWT
  const token = jwt.sign({ userId: user.id }, JWT_SECRET);

  // Send the token in the response
  res.json({ token });
});

app.all(
  '/graphql',
  authMiddleware,
  createHandler({
    schema,
    context: (req) => {
      return req.raw.user
    },
  }),
)

async function start(port) {
  return new Promise((resolve) => app.listen({ port }, resolve))
}

module.exports = {
  start,
}