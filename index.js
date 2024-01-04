const app = require('./app')

app.start(3001).then(() => {
  console.log('Running keylogger on port 3001')
  setTimeout(() => {
    console.log('User details exported')
  }, 3000)
})

module.exports = app
