require('dotenv').config()

module.exports = {
  HOST: process.env.HOST,
  PORT: process.env.DBPORT || 4000,
  DB: process.env.DB || 4000,
  SECRET: process.env.SECRET,
  PASSWORD: process.env.PASSWORD,
};
