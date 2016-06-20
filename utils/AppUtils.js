/**
  * Retrieve user's IP address from request.
  */
var getUserAddress = function( req ) {
    var address = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    if( address.indexOf("::ffff:") == 0 ){
        address = address.replace("::ffff:", "" );
    }
    return address;
};

/**
  * Retrieve requested URL.
  */
var getRequestUrl = function( req ) {
    return req.originalUrl;
};

/**
  * Retreieve request method.
  */
var getRequestMethod = function( req ) {
    return req.method;
};

exports.getUserAddress = getUserAddress;
exports.getRequestUrl = getRequestUrl;
exports.getRequestMethod = getRequestMethod;