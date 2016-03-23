var requestHelper = require('./request_helper');

var stack = {
	targetURN: "urn%3Aobject%3Ar2stack%3AStackTest1",
	createStack: function(testURN, callback) {
		console.log( 'createStack..' + testURN );

		var options = {
			method: "POST",
			url: requestHelper.url + "stack?partner_uri=" + requestHelper.partner_uri+"&ttl=6000&urn="+testURN,
			headers: {
				"authorization": requestHelper.authorization,
				"content-type": "application/json",
				"cache-control": "no-cache",
				"postman-token": "bac01ac7-8b96-5559-d32f-3548229e4e17"
			},
			body: JSON.stringify({ a: 2 }),
			operation: 'createStack'
		}

		requestHelper.executeRequest(options, callback);
	},

	removeStack: function(testURN) {
		console.log( 'removeStack..' + testURN );

		var options = {
			method: "DELETE",
			url: requestHelper.url + "stack/"+ testURN +"?partner_uri=" + requestHelper.partner_uri,
			headers: {
				"authorization": requestHelper.authorization,
				"content-type": "application/json",
				"cache-control": "no-cache",
				"postman-token": "bac01ac7-8b96-5559-d32f-3548229e4e17"
			},
			operation: 'removeStack'
		}

		requestHelper.executeRequest(options);
	},

	pushToStack: function(testURN)
	{
		console.log( 'postIntoStack..' );
		var push_url = requestHelper.url + "stack/"+testURN+"/item?partner_uri="+ requestHelper.partner_uri;
		console.log(push_url)
		var options = {
			method: "POST",
			url: push_url,
			body: requestHelper.sampleBody,
			headers: {
				"authorization": requestHelper.authorization,
				"cache-control": "no-cache",
				"content-type": "text/plain"
			},
			operation: 'pushToStack'
		};

		requestHelper.executeRequest(options);
	},

	popFromStack: function(testURN)
	{
		console.log( 'popFromStack..' );
		var options = {
			method: "DELETE",
			url: requestHelper.url + "stack/"+testURN+"/item?partner_uri="+ requestHelper.partner_uri,
			headers: {
				"authorization": requestHelper.authorization,
				"cache-control": "no-cache",
				"content-type": "text/plain"
			},
			operation: 'popFromStack'

		};

		requestHelper.executeRequest(options);

	},

	findStack: function(testURN)
	{
		console.log( 'findStack..' + testURN );
		var options = {
			method: "GET",
			url: requestHelper.url + "stack/"+testURN+"?partner_uri="+ requestHelper.partner_uri,
			headers: {
				"authorization": requestHelper.authorization,
				"cache-control": "no-cache"
			},
			operation: 'findStack'
		};

		requestHelper.executeRequest(options);
	}
}

module.exports = stack


