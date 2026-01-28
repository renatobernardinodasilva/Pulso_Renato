module.exports = (sequelize, DataTypes) => {
  const Plantao = sequelize.define('Plantao', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    hora_de_entrada: {
      type: DataTypes.TIME,
      allowNull: false
    },
    hora_de_saida: {
      type: DataTypes.TIME,
      allowNull: false
    },
    quantidade_profissionais: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })

  Plantao.associate = (models) => {
    Plantao.belongsTo(models.Escala, {
      foreignKey: 'escala_id'
    })

    Plantao.belongsToMany(models.Profissional, {
      through: 'profissional_plantoes',
      foreignKey: 'plantao_id'
    })
  }

  return Plantao
}
