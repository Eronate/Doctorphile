const db = require('../../../models');

const deleteSpecializationResolver = async (_, args) => {
    const { id } = args;

    const targetSpecialization = await db.Specialization.findByPk(id);

    if(!targetSpecialization) {
      return null;
    }

    try {
      await targetSpecialization.destroy();

      return true;
    } catch (e) {
      throw new Error(e);
    }
  }

module.exports = deleteSpecializationResolver;