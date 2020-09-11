'use strict';

var config = require('../config/config');
var utils = require('../util/customFunctions');
var util = new utils();
const path = require('path');
const httpStatusCode = require('http-status-codes');
const jwt = require('jsonwebtoken');
const _model = require("../model/model");
const model = new _model();

module.exports = {
    
    anonymousAuthorize: function (req, res, next) {
        const lang = config.message[req.app.get("lang")];
        try {
            //-------------------------- START Check AnonymousAuthorize
            if (config.AnonymousReqSecret['Web'] === req.headers['client_secret']) {
                next();
            } else {
                
                util.makeJsonResponse(res, false, httpStatusCode.UNAUTHORIZED, util.formatException(lang.unauthorized, ''), {});
            }
            //-------------------------- END Check AnonymousAuthorize
        } catch (e) {
            util.makeJsonResponse(res, false, httpStatusCode.INTERNAL_SERVER_ERROR, util.formatException(lang.webError, e.stack.toString()), {});

        }
    }
}