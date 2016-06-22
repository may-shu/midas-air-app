var express = require( 'express' );

var app = express(),
    util = require( './utils/AppUtils' ),
    handleBars = require( 'express-handlebars' ),
    logger = { info : console.log };

var bars = handleBars.create({
    helpers : {
        carousel : function( banners ) {
            var html = '<div class="slides-container">' +
                            '<div class="slides">' +
                                '<ul style="width :' + ( banners.length * 100 + '%' ) + '">';
            
            var i = 0, length = banners.length;
            
            for( i=0; i<length; i++) {
                html = html + '<li style="width :' + ((100 / length ) + '%' ) + '";><img src="' + banners[i] + '"/></li>';
            }
            
            html = html + '</ul>' +
                            '<div class="slider-controls">' +
                                '<div class="slider-control left">' +
                                    '<i class="fa fa-fw fa-caret-left"></i>' +
                                '</div>' +
                                '<div class="slider-control right">' +
                                    '<i class="fa fa-fw fa-caret-right"></i>' +
                                '</div>' +
                            '</div>' +
                
                            '<ol class="slider-jumps">';
            
            for( i=0; i<length; i++ ) {
                html = html + '<li></li>';
            }
            
            html = html +  '</ol>' +
                    '</div>';
            
            return html;
        },
        even : function( index, scope ){ 
            if ( ++index % 2 ) 
                return scope.inverse(this);
            else 
                return scope.fn(this);
        }
    },
    extname : '.bars', defaultLayout:'index.bars'
})

app.engine( '.bars', bars.engine );
app.set( 'view engine', '.bars' );

app.use('*', function( req, res, next ) {

    var messageString = util.getUserAddress( req ) + " -> " + util.getRequestMethod( req ) + " - > " + util.getRequestUrl( req );

    logger.info( messageString );
    next();
});

app.set( 'port', 8080 );

app.get('/', function( req, res, next ) {
    var data = {
        banners : [
            '/resources/app/images/products/triffle.jpg',
            '/resources/app/images/products/vogue.jpg',
            '/resources/app/images/products/optimus.jpg',
            '/resources/app/images/products/chief.jpg',
            '/resources/app/images/products/air-vitamin.jpg',
            '/resources/app/images/products/ozone.jpg',
        ]
    }
    res.render( 'home', data );
});

app.get( '/product/:name', function( req, res, next ) {
    
    var data = {};
    
    switch (req.params.name) {
        case 'triffle' : 
            data = {
                banner : '/resources/app/images/products/triffle.jpg',
                name : 'Triffle',
                type : 'Air Purifier',
                characterstic : {
                    features : [
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Child Lock' },
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Composite Filter' },
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Energy Saving Fans' },
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Multi Speed Setting' }
                    ],
                    functions : [
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Silent Operation' },
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Smell Sensor' },
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Negative Ions' },
                        
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Power Efficiency' },
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Air Quality LED Indicator' },
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Timer' },
                        
                        { image : '/resources/app/images/icon/placeholder.png', description : 'HEPA Type 99.7%' },
                    ],
                    specifications : {
                        'Model No.' : 'Triffle',
                        'Power Consumption' : '30 Watt',
                        'Voltage/Frequency' : '200-220 V AC / 50 Hz',
                        'CADR (m3/h)' : '160 m3/h',
                        'Noise Levels' : 'High-<= 45dB | Medium-<= 35dB | Low- <= 25dB',
                        'Material' : 'ABS',
                        'Net Weight' : '3.5 Kg',
                        'Pollutant that can be collected <br/> Reduced & Decomposed' : '',
                        'Pollutant that can be collected <br/> Reduced & Deodorised' : ''
                        
                    }
                }
            };
            break;
            
        case 'vogue' : 
            data = {
                banner : '/resources/app/images/products/vogue.jpg',
                name : 'Vogue',
                type : 'Air Purifier',
                characterstic : {
                    features : [
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Child Lock' },
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Air Delivery Indicator' },
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Changable Filter' },
                        { image : '/resources/app/images/icon/placeholder.png', description : '4-Step Purification' },
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Engery Saving Fans' },
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Negative Ions' },
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Multi Speed Setting' }
                    ],
                    functions : [
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Silent Operation' },
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Filter Replacement Indicator' },
                        
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Smell Sensor' },
                        { image : '/resources/app/images/icon/placeholder.png', description : 'True HEPA Type 99.7%' },
                        
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Power Efficiency' },
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Sleep Mode' },
                        
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Air Quality LED Indicator' },
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Timer' }
                        

                    ],
                    specifications : {
                        'Model No.' : 'Vogue',
                        'Power Consumption' : '45 Watt',
                        'Voltage/Frequency' : '200-220 V AC / 50 Hz',
                        'CADR (m3/h)' : '240 m3/h',
                        'Noise Levels' : 'High-<= 58dB | Medium-<= 48dB | Low- <= 29dB',
                        'Material' : 'ABS',
                        'Net Weight' : '5.5 Kg',
                        'Pollutant that can be collected <br/> Reduced & Decomposed' : '',
                        'Pollutant that can be collected <br/> Reduced & Deodorised' : ''
                        
                    }
                }
            };
            
            break;
            
        case 'optimus' : 
            data = {
                banner : '/resources/app/images/products/optimus.jpg',
                name : 'Optimus',
                type : 'Air Purifier',
                characterstic : {
                    features : [
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Child Lock' },
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Air Delivery Indicator' },
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Changable Filter' },
                        { image : '/resources/app/images/icon/placeholder.png', description : '6-Step Purification' },
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Engery Saving Fans' },
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Smart Night' },
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Negative Ions' },
                        { image : '/resources/app/images/icon/placeholder.png', description : 'HEPA Shield Technology' }
                    ],
                    functions : [
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Silent Operation' },
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Filter Replacement Indicator' },
                        
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Smell Sensor' },
                        { image : '/resources/app/images/icon/placeholder.png', description : 'True HEPA Type 99.7%' },
                        
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Power Efficiency' },
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Filter Efficiency Shield' }, 
                        
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Air Quality LED Indicator' },
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Timer' },
                        
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Remote Control' },
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Sleep Mode' }
                        

                    ],
                    specifications : {
                        'Model No.' : 'Optimus',
                        'Power Consumption' : '60 Watt',
                        'Voltage/Frequency' : '200-220 V AC / 50 Hz',
                        'CADR (m3/h)' : '290 m3/h',
                        'Recommended Coverage (m2)' : '30-60 m2',
                        'Noise Levels' : 'High-<= 59dB | Medium-<= 40dB | Low- <= 25dB',
                        'Material' : 'ABS',
                        'Net Weight' : '6.2 Kg',
                        'Pollutant that can be collected <br/> Reduced & Decomposed' : '',
                        'Pollutant that can be collected <br/> Reduced & Deodorised' : ''
                        
                    }
                }
            };
            break;
            
        case 'chief' : 
            data = {
                banner : '/resources/app/images/products/chief.jpg',
                name : 'Chief',
                type : 'Air Purifier',
                characterstic : {
                    features : [
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Child Lock' },
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Air Delivery Indicator' },
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Changable Filter' },
                        { image : '/resources/app/images/icon/placeholder.png', description : '8-Step Purification' },
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Engery Saving Fans' },
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Smart Night' },
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Negative Ions' },
                        { image : '/resources/app/images/icon/placeholder.png', description : 'HEPA Shield Technology' },
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Auto diagnostic' },
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Humidity Indicator' }
                    ],
                    functions : [
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Silent Operation' },
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Filter Replacement Indicator' },
                        
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Smell Sensor' },
                        { image : '/resources/app/images/icon/placeholder.png', description : 'True HEPA Type 99.7%' },
                        
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Power Efficiency' },
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Filter Efficiency Shield' }, 
                        
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Air Quality LED Indicator' },
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Timer' },
                        
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Remote Control' },
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Sleep Mode' }
                        

                    ],
                    specifications : {
                        'Model No.' : 'Chief',
                        'Power Consumption' : '66 Watt',
                        'Voltage/Frequency' : '200-220 V AC / 50 Hz',
                        'CADR (m3/h)' : '450 m3/h',
                        'Recommended Coverage (m2)' : '40-80 m2',
                        'Noise Levels' : 'High-<= 59dB | Medium-<= 40dB | Low- <= 30dB',
                        'Material' : 'ABS',
                        'Net Weight' : '10.80 Kg',
                        'Pollutant that can be collected <br/> Reduced & Decomposed' : '',
                        'Pollutant that can be collected <br/> Reduced & Deodorised' : ''
                        
                    }
                }
            };
            break;
            
        case 'air-vitamin' : 
            data = {
                banner : '/resources/app/images/products/air-vitamin.jpg',
                name : 'Air Vitamin',
                type : 'Air Purifier',
                characterstic : {
                    features : [
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Blue LED Indicator' },
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Negative Ions' }
                    ],
                    functions : [
                        { image : '/resources/app/images/icon/placeholder.png', description : 'Silent Operation' }
                    ],
                    specifications : {
                        'Model No.' : 'Air Vitamin',
                        'Material' : 'ABS'
                    }
                }
            };
            break;
            
        case 'ozone' : 
            data = {
                banner : '/resources/app/images/products/ozone.jpg',
                name : 'Ozone',
                type : 'Water Purifier',
                characterstic : {
                    features : [
                    ],
                    functions : [
                    ],
                    specifications : {
                    }
                }
            };
            break;
    }
    
    logger.info( req.params.name );
    res.render( 'product', data );
});

app.get( '/resources/*', function( req, res, next ) {
    res.sendFile(__dirname + '/' + req.originalUrl );
});


app.listen( app.get( 'port'), function(){
    var msgString = 'Express Server listening on port ' + this.address().port + ' in ' + app.settings.env + '  mode.';
    logger.info( msgString );
});