const db = require('../../../models')
const bcrypt = require('bcrypt');

const updateDoctorResolver = async (_, args) => {
  const { id, doctor } = args

  const targetDoctor = await db.Doctor.findByPk(id, {
    include: [db.User],
  })

  if (!targetDoctor) {
    return null
  }

  let updatedDoctor;

  try {
    if (doctor.password) {
      const encryptedPassword = await bcrypt.hash(doctor.password, 10);
      doctor.password = encryptedPassword;
    }

    await db.sequelize.transaction(async (t) => {
      await targetDoctor.User.update(doctor, { transaction: t }); 
      updatedDoctor = await targetDoctor.update(doctor, { transaction: t }); 
    });

    return updatedDoctor;
  }catch (error) {
      throw new Error(error);
  }
}

module.exports = updateDoctorResolver
