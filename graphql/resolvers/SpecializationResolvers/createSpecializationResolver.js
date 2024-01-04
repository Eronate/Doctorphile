const db = require('../../../models')

const createSpecializationResolver = async (_, { specialization }) => {
  const { name } = specialization
  console.log(specialization)
  console.log(db.Specialization)
  const newSpecialization = await db.Specialization.create({
    name,
  })

  return newSpecialization
}

module.exports = createSpecializationResolver
