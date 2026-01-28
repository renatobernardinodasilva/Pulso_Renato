const ESPECIALIDADES = require('./enums/Especialidade')

module.exports = (sequelize, DataTypes) => {
  const Setor = sequelize.define('Setor', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    especialidade: {
      type: DataTypes.ENUM(...ESPECIALIDADES),
      allowNull: false
    }
  })

  Setor.associate = (models) => {
    Setor.belongsTo(models.Instituicao, {
      foreignKey: 'instituicao_id'
    })

    Setor.hasMany(models.Escala, {
      foreignKey: 'setor_id'
    })
  }

  return Setor
}
