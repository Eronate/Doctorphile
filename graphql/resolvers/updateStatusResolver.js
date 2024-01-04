const db = require('../../models');

const updateStatusResolver = async (_, args) => {
    const { id, status } = args;

    const targetStatus = await db.Status.findByPk(id);

    if(!targetStatus) {
      return null;
    }

    const updatedStatus = await targetStatus.update({
      ...status,
    });

    return updatedStatus;
}

module.exports = updateStatusResolver;