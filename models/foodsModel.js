const sequelize = require("sequelize");
const db = require("../config/db");

const foodsmodel = db.define("foods", {
  namamakan: { type: sequelize.STRING },
  daerah: { type: sequelize.STRING },
  deskripsi: { type: sequelize.STRING },
});

module.exports = foodsmodel;
