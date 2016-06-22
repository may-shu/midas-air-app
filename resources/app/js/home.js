var sliderUl = document.querySelector( '.slides-container ul' );
var banners = 6;
var start = 0;

var next = function() {
    console.log( 'Next' );
    console.log( sliderUl );
    Velocity( sliderUl, { left : ( start * 100 * -1 ) + '%' }, { duration : 1000 });
    start = ( start + 1 ) % banners;
}

setInterval( function() {
    next();
}, 5000 );

var moveTo = function( location ) {
    console.log( 'location' );
    window.location.href = location;
}