const db = require('../../../models')
const bcrypt = require('bcrypt');

const updatePatientResolver = async (_, args) => {
  const { id, patient } = args

  const targetPatient = await db.Patient.findByPk(id, {
    include: [db.User],
  })

  if (!targetPatient) {
    return null
  }

  let updatedPatient; 

  try {
    if (patient.password) {
      const encryptedPassword = await bcrypt.hash(patient.password, 10);
      patient.password = encryptedPassword;
    }

    await db.sequelize.transaction(async (t) => {
      await targetPatient.User.update(patient, { transaction: t }); 
      updatedPatient = await targetPatient.update(patient, { transaction: t }); 
    });

    return updatedPatient; 
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      throw new Error('The provided data violates a unique constraint.');
    } else {
      throw new Error(error);
    }
  }
}

module.exports = updatePatientResolver
