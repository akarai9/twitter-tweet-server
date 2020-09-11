const _model = require("../model/model"),
Twitter = require('twit');

// const message = new _message();
const client = new Twitter({
	consumer_key: '2xPxGaFgVT3nbkjsYpqwGZWLV',
	consumer_secret: 'bg2Iq2ovdk9U6ROt5QXEF9cblk7irF9s47XIWpCjP6oESkVFWT',
	access_token: '2672840836-H5iJ5saBwRKLNX1H3nUIvCd1xrQPidrpfgHhbgc',
	access_token_secret: 'IbqzmXfjc8ff8IKjtqRMTmGsIw06votJnvm9lucIHXnpo'
});
function customFunction() {
}

customFunction.prototype.makeJsonResponse = function (res, successStatus, statusCode, message, result) {	
	res.status(statusCode).json({
		"status": successStatus,
		"statusCode": statusCode,
		"message": message,
		"result": result ? result : {}
	});
};


customFunction.prototype.formatException = function (Error, Exception) {
	try {
		Error = Error ? Error : '';
		Exception=(Exception && Exception.stack) ? Exception.stack:Exception;
		Error = typeof(Error)=="string"? Error: JSON.stringify(Error ? Error : '');
		Exception = Exception && Exception != "" ? (JSON.stringify(Exception ? Exception : '')) : "";
		if (Exception) {
			return Error + (Exception && Exception != "" ? "-" : "") + (Exception && Exception != "" ? Exception : "");
		} else {
			return Error;
		}		

	} catch (e) {
		return Error ? Error : "";
	}
}

customFunction.prototype.getCount = function (params) {
	try { 
		client.get(`search/tweets`, params).then(result => {
		result.length = result.data.length;
		console.log("requ", result, "{{{{{{{{{{{{{{{{{{");
		result = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'].map((ele) => {
		    return {
		        label: ele,
		        value: 2
		    }
		})
		console.log("requ", result, "++++++++++++")
		return result;
	})
	} catch (e) {
		return e ? e : "";
	}
}

module.exports = customFunction;
