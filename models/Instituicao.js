module.exports = (sequelize, DataTypes) => {
  const Instituicao = sequelize.define('Instituicao', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    endereco: DataTypes.STRING
  })

  Instituicao.associate = (models) => {
    Instituicao.hasMany(models.Profissional, {
      foreignKey: 'instituicao_id'
    })

    Instituicao.hasMany(models.Setor, {
      foreignKey: 'instituicao_id'
    })
  }

  return Instituicao
}
