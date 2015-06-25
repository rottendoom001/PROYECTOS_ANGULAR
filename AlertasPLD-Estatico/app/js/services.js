'use strict';

var alertsServices = angular.module('alertsServices', ['ngResource']);

alertsServices.factory('getClients', ['$resource',
  function($resource){
    return $resource('http://127.0.0.1\\:8080/alertasPld/clientesTest', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);

  alertsServices.factory('getTransactions', ['$resource',
    function($resource){
      return $resource('http://127.0.0.1\\:8080/alertasPld/transaccionesTest', {}, {
        query: {method:'GET',isArray:true}
      });
    }]);

    alertsServices.factory('getTransactionsR', ['$resource',
      function($resource){
        return $resource('http://127.0.0.1\\:8080/alertasPld/transaccionesRTest', {}, {
          query: {method:'GET',isArray:true}
        });
      }]);

  alertsServices.factory('getAccounts', ['$resource',
      function($resource){
        return $resource('http://127.0.0.1\\:8080/alertasPld/cuentasTest', {}, {
          query: {method:'GET',isArray:true}
        });
      }]);

  alertsServices.factory('getAlerts', ['$resource',
        function($resource){
          return $resource('http://127.0.0.1\\:8080/alertasPld/alertasTest', {}, {
            query: {method:'GET',isArray:true}
          });
        }]);
