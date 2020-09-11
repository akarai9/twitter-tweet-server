'use strict';

const config = require('../config/config'),
    httpStatusCode = require('http-status-codes'),
    _util = require('../util/customFunctions'),
    util = new _util(),
    _model = require("../model/model"),
    commonModel = new _model(),
    Twitter = require('twit');

// const message = new _message();
const client = new Twitter({
    consumer_key: '2xPxGaFgVT3nbkjsYpqwGZWLV',
    consumer_secret: 'bg2Iq2ovdk9U6ROt5QXEF9cblk7irF9s47XIWpCjP6oESkVFWT',
    access_token: '2672840836-H5iJ5saBwRKLNX1H3nUIvCd1xrQPidrpfgHhbgc',
    access_token_secret: 'IbqzmXfjc8ff8IKjtqRMTmGsIw06votJnvm9lucIHXnpo'
});

class controlller {
    constructor() { }

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     */
    login(req, res) {

        const lang = config.message[req.app.get("lang")];
        try {

            client.get('account/verify_credentials').then(result => {
                util.makeJsonResponse(res, true, httpStatusCode.OK, lang.tweetSuccess, result);
            }).catch(err => {
                util.makeJsonResponse(res, false, httpStatusCode.BAD_REQUEST, lang.tweetError, []);
            });

        } catch (e) {
            util.makeJsonResponse(res, false, httpStatusCode.BAD_REQUEST, lang.tweetError, []);
        }
    };

    getGraphData(req, res) {
        const lang = config.message[req.app.get("lang")];
        try {
            const params = { q: req.query.handle, count: 100 };
            let data ;
            if ( req.query.until) {
                // params.since_id = req.query.since;
                params.until = req.query.until;
            }
            let response = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'].map((ele) => {
                    return {
                        label: ele,
                        value: 2
                    }
                })

            client.get(`search/tweets`, params).then(result => {
                result.length = result.data.length;
                if (result.data.search_metadata.next_results) {
                    params.max_id = result.data.search_metadata.max_id
                    // Here i want to paginate the data and create a cron by which data will be 
                    // saved in the database and so we dont need to fetch count at runtime from twitter APIs
                    // Cron will be called every night to get the count of tweets and will be saved in database weekly.
                    // client.get(`search/tweets`, params).then(result => {})
                }
                console.log(result, "++++++++++++")
                util.makeJsonResponse(res, true, httpStatusCode.OK, lang.tweetSuccess, result);
            }).catch(err => {
                util.makeJsonResponse(res, false, httpStatusCode.BAD_REQUEST, err && err.message ? err.message : lang.webError, []);
            });

        } catch (e) {
            util.makeJsonResponse(res, false, httpStatusCode.BAD_REQUEST, e && e.message ? e.message : lang.webError, []);
        }
    }

    getTweets(req, res) {
        let cache = [];
        let cacheAge = 0;
        const lang = config.message[req.app.get("lang")];
        try {
            if (Date.now() - cacheAge > 60000) {
                cacheAge = Date.now();
                const params = { screen_name: req.query.handle, count: 10  };
                if (req.query.since) {
                    params.max_id = req.query.since;
                }
                client.get(`statuses/user_timeline`, params).then(result => {
                    cache = result;
                    util.makeJsonResponse(res, true, httpStatusCode.OK, lang.tweetSuccess, result);
                }).catch(err => {
                console.log("req.query.handle", err);

                    util.makeJsonResponse(res, false, httpStatusCode.BAD_REQUEST, lang.tweetError, []);
                });
            }
            else {
                res.send(cache);
            }
        } catch (e) {
            util.makeJsonResponse(res, false, httpStatusCode.BAD_REQUEST, e && e.message ? e.message : lang.webError, []);
        }
    }

}

module.exports = controlller;
