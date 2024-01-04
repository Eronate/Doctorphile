const db = require('../../models');

const updateSpecializationResolver = async (_, args) => {
    const { id, specialization } = args;

    const targetSpecialization = await db.Specialization.findByPk(id);

    if(!targetSpecialization) {
      return null;
    }

    const updatedSpecialization = await targetSpecialization.update({
      ...specialization,
    });

    return updatedSpecialization;
}

module.exports = updateSpecializationResolver;