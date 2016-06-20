var express = require( 'express' );

var app = express(),
    util = require( './utils/AppUtils' ),
    bars = require( 'express-handlebars' ),
    logger = { info : console.log };

app.engine( '.bars', bars({extname : '.bars' }));
app.set( 'view engine', '.bars' );

app.use('*', function( req, res, next ) {

    var messageString = util.getUserAddress( req ) + " -> " + util.getRequestMethod( req ) + " - > " + util.getRequestUrl( req );

    logger.info( messageString );
    next();
});

app.set( 'port', 8080 );

app.get('/', function( req, res, next ) {
    res.render( 'index' );
});

app.get( '/resources/*', function( req, res, next ) {
    res.sendFile(__dirname + '/' + req.originalUrl );
});


app.listen( app.get( 'port'), function(){
    var msgString = 'Express Server listening on port ' + this.address().port + ' in ' + app.settings.env + '  mode.';
    logger.info( msgString );
});