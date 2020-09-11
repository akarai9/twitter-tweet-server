"use strict";

const mysql = require('mysql');
const connection = require('../config/sqlConnector');
const constant = require('../config/appConstants');
const promise = require("promise");

class commonModel {

    constructor() { }

    //function to fetch the master country list 
    fetchCountryList() {
        let response = [];
        return new promise(function (resolve, reject) {
            try {
                let query = "CALL spFetchCountryList()";
                connection.queryHandler(query, '', true, function (error, results, fields) {
                    if (error) {
                        reject(response);
                    }

                    else {
                        resolve(results[0]);
                    }
                });
            } catch (err) {
                reject(err);
            }
        });
    }

}

module.exports = commonModel;