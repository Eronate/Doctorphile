'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Doctor.belongsTo(models.User)
      //models.Doctor.hasMany(models.Appointment, { foreignKey: 'doctor_id' })
      models.Doctor.belongsTo(models.Clinic)
      models.Doctor.belongsTo(models.Specialization)
    }
  }
  Doctor.init(
    {
      user_id: DataTypes.INTEGER,
      clinic_id: DataTypes.INTEGER,
      specialization_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Doctor',
    },
  )
  return Doctor
}
