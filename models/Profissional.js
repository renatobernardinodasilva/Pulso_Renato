const ESPECIALIDADES = require('./enums/Especialidade')

module.exports = (sequelize, DataTypes) => {
  const Profissional = sequelize.define('Profissional', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    nome: DataTypes.STRING,
    crm: DataTypes.STRING,
    email: DataTypes.STRING,
    especialidades: {
      type: DataTypes.ARRAY(
        DataTypes.ENUM(...ESPECIALIDADES)
      ),
      allowNull: false
    }
  })

  Profissional.associate = (models) => {
    Profissional.belongsTo(models.Instituicao, {
      foreignKey: 'instituicao_id'
    })

    Profissional.belongsToMany(models.Plantao, {
      through: 'profissional_plantoes',
      foreignKey: 'profissional_id'
    })
  }

  return Profissional
}
