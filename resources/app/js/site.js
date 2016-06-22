var ellipsis = document.querySelector( '#sidebar-ellipsis' );
var body = document.querySelector( '.main-content');
var sidebar = document.querySelector( '.side-bar' );

var isSideBarOpen = false;

ellipsis.addEventListener( 'click', function() {
    if( isSideBarOpen ) {
        var bodyClass  = body.className;
        bodyClass = bodyClass.replace( ' open', '' );
        body.className = bodyClass;
        
        var sideBarClass = sidebar.className;
        sideBarClass = sideBarClass.replace( ' open', '' );
        sidebar.className = sideBarClass;
        
        isSideBarOpen = false;
    } else {
        
        body.className = body.className + ' open';
        sidebar.className = sidebar.className + ' open';
        
        isSideBarOpen = true;
    }
});

var airSelector = document.querySelector( '.product-selectors.air' );
var waterSelector = document.querySelector( '.product-selectors.water' );

if( airSelector != null && waterSelector != null ) {
    
    var airFreshners = document.querySelector( '.air-freshners' );
    var waterFreshners = document.querySelector( '.water-purifiers' );

    var airSelected = true;
    
    airSelector.addEventListener( 'click', function() {
        airSelected = true;
        
        if( waterFreshners != null ) {
            Velocity( waterFreshners, { maxHeight : 0, overflow : 'hidden', opacity : 0, display : 'none' }, { duration : 500 });
            Velocity( airFreshners, { maxHeight : '500px', overflow : 'auto', opacity : 1, display : 'block'})
        }
    });
    
    waterSelector.addEventListener( 'click', function() {
        airSelected = false;
        
                Velocity( airFreshners, { maxHeight : 0, overflow : 'hidden', opacity : 0, display : 'none' }, { duration : 500 });
            Velocity( waterFreshners, { maxHeight : '500px', overflow : 'auto', opacity : 1, display : 'block'})
    });
    
}