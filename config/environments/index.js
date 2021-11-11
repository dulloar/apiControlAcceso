require('dotenv').config();

 
const PRODUCTION = require("./production");
const DEVELOPMEN = require("./development");

const { NODE_ENV } = process.env;

let currentEnv = DEVELOPMEN;
if(NODE_ENV === "produccion"){
    currentEnv = PRODUCTION;
}

module.exports = currentEnv;