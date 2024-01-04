const db = require('../../models');

const deleteClinicResolver = async (_, args) => {
    const { id } = args;

    const targetClinic = await db.Clinic.findByPk(id);

    if(!targetClinic) {
      return null;
    }

    try {
      await targetClinic.destroy();

      return true;
    } catch (e) {
      throw new Error(e);
    }
  }

module.exports = deleteClinicResolver;