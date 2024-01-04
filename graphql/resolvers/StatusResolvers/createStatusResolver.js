const db = require('../../../models')

const createStatusResolver = async (_, { status }) => {
  const { title } = status
  console.log(status)
  console.log(db.Status)
  const newStatus = await db.Status.create({
    title,
  })

  return newStatus
}

module.exports = createStatusResolver
