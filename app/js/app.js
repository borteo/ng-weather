'use strict'


var app = angular.module( 'ngWeather', [] );

// Service to get weather JSON 
app.factory( 'weatherService', [
  '$http', '$q',
  function( $http, $q ) {

    var METRIC   = 'metric';
    var IMPERIAL = 'imperial';
    var urlAPI   = 'http://api.openweathermap.org/data/2.5/forecast/daily?id=2643743&units=';

    return {
      // if param unit sent is not celsius or fahrenheit, returns undefined
      // openweathermap API default unit: metric 
      getUnit: function( unit ) {
        if ( typeof unit === 'undefined' ) {
          return METRIC;
        }

        var units = {
          'celsius': METRIC,
          'fahrenheit': IMPERIAL
        };
        return units[ unit ];
      },

      getData: function( unit ) {
        var iso = this.getUnit( unit );

        var defer = $q.defer();
        $http.get( urlAPI + iso )
          .success(function( data ) {
            defer.resolve( data );
          })
          .error(function() {
            defer.reject( 'An error has occurred retrieving weather data' );
          });
        return defer.promise;
      }

    };
  }
]);

app.directive( 'weatherWidget', [
  'weatherService',
  function( weatherService ) {
    return {
      restrict: 'C',
      replace: true,
      templateUrl: 'partials/weather.html',
      scope: {
        unit: '@',
        days: '@'
      },
      link: function( scope, element, attribute ) {
        
        // spefic call for openweathermap to get the weather icon
        scope.getIcon = function( id ) {
          return 'http://openweathermap.org/img/w/'+ id +'.png';
        };

        // get the data from the service passing the unit
        scope.update = function() {
          weatherService.getData( scope.unit )
            .then(function( data ) {
              scope.widget = data;
            },
            function( error ) {
              scope.alert = {
                show: true,
                message: error,
                alertClass: 'danger'
              };
            }
          );
        };
        scope.update();

      }
    };
  }
]);



angular.element(document).ready(function() {
  return angular.bootstrap(document, ['ngWeather']);
});
