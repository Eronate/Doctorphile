const db = require('../../../models');

const deleteStatusResolver = async (_, args) => {
    const { id } = args;

    const targetStatus = await db.Status.findByPk(id);

    if(!targetStatus) {
      return null;
    }

    try {
      await targetStatus.destroy();

      return true;
    } catch (e) {
      throw new Error(e);
    }
  }

module.exports = deleteStatusResolver;