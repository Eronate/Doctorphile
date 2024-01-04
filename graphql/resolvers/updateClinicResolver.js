const db = require('../../models');

const updateClinicResolver = async (_, args) => {
    const { id, clinic } = args;

    const targetClinic = await db.Clinic.findByPk(id);

    if(!targetClinic) {
      return null;
    }

    const updatedClinic = await targetClinic.update({
      ...clinic,
    });

    return updatedClinic;
}

module.exports = updateClinicResolver;