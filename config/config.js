"use strict";

require("dotenv").config();
const env = process.env.NODE_ENV; // 'dev' or 'prod'

//import app Constant
const appConstant = require("./appConstants");

//import language
const messages = require('../locales/messages');


const dev = {
    App: {
        Port: process.env.PORT || 8080,
        Http: ''
    },
    DbMysql: {
        host: "",
        user: "",
        password: "LkzPoeRay2A89Ti",
        database: "nexlvdb",
        multipleStatements: true,
        charset : 'utf8mb4' ,
        debug   :  false,
        connectionLimit : 100
    },
    AnonymousReqSecret:{
        Web:'915961CD8EC45C16C65EB07DC376D2BC24B81B7E5D9402CC0936185BF8C7E295'       
    },
    Constant: appConstant,
    message: messages
};

module.exports = dev;
