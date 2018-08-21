'use strict';
module.exports = (sequelize, DataTypes) => {
  var Contato = sequelize.define('Contato', {
    id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true
    },
    nome: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    operadora: DataTypes.STRING
  }, {timestamps: false});
  
  Contato.associate = function(models) {
    // associations can be defined here
  };
  return Contato;
};