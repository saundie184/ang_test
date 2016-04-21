angular.module( 'main' ).controller( 'mainController', ['$scope', function( $scope ){
    
    $scope.slider_value = 30;
    $scope.sp_min = 600;
    $scope.sp_max = 700;
    $scope.sp_enable = true;
    $scope.spinner_value = 650;
    $scope.switch_value = false;
    
    var now = (new Date()).getTime();
    
    $scope.status_domain = [ 3600*24, 3600*12, 3600*6, 3600*3, 3600, 0 ];
    $scope.status_range = ['#389604', '#68C000', '#C0DF00', '#FCE300', '#FD8D00', '#FF5D00'];
    $scope.status_data = [{x: now - (Math.random()*(24*60*60)), y: {event: 'Something terrible'}}];
    $scope.status_date_range = { start: (now) - (24*60*60), end: (now ) };
    
    $scope.slider_label = function( val ){
        
        return val + '!';
    };
    
    $scope.changeSpinnerEnablement = function(){
        $scope.sp_enable = !$scope.sp_enable;
    };

}]);
