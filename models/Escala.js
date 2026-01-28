module.exports = (sequelize, DataTypes) => {
  const Escala = sequelize.define('Escala', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    nome: DataTypes.STRING,
    mes_de_referencia: DataTypes.STRING,
    escala_publicada: DataTypes.BOOLEAN
  })

  Escala.associate = (models) => {
    Escala.belongsTo(models.Setor, {
      foreignKey: 'setor_id'
    })

    Escala.hasMany(models.Plantao, {
      foreignKey: 'escala_id'
    })
  }

  return Escala
}
