app = angular.module( 'testapp', ['ui.router', 'main', 'pascalprecht.translate'] );

app.config( function( $stateProvider, $urlRouterProvider ){

    $urlRouterProvider.otherwise( '/home' );

    $stateProvider
        .state( 'homepage', {
            url: '/home',
            templateUrl: 'scripts/main/main.html'
        });
});

app.config(['$translateProvider', function( $translateProvider ) {
    
    $translateProvider
        .translations( 'en', en_US )
        .preferredLanguage( 'en' );
}]);

// helper to get a text measurement for sizing purposes
var measureText = function( text, fontSize, style ){
   var lDiv = document.createElement('lDiv');

    document.body.appendChild(lDiv);

    if (style != null) {
        lDiv.style = style;
    }
    lDiv.style.fontSize = "" + fontSize + "px";
    lDiv.style.position = "absolute";
    lDiv.style.left = -1000;
    lDiv.style.top = -1000;

    lDiv.innerHTML = text;

    var lResult = {
        width: lDiv.clientWidth,
        height: lDiv.clientHeight
    };

    document.body.removeChild(lDiv);
    lDiv = null;

    return lResult;
};