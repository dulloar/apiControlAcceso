module.exports = {
  PORT: process.env.PORT,
  DB: {
    username: "root",
    password: "2532",
    database: "dmgmarket",
    host: "localhost",
    dialect: "mysql",
    seederStorage:"json",
    seederStoragePath:"sequelizeSeeds.json",
    onDelete: 'CASCADE',
    define:{
      //timestamps:false,
      underscored: true
    }
  },
  JWT_SECRET: process.env.JWT_SECRET,
  CACHE_KEY: process.env.CACHE_KEY,
  SWAGGER_PATH: `../../swagger/${process.env.SWAGGER_DOC}.json`
};
