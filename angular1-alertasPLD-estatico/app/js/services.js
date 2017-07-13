'use strict';

var alertsServices = angular.module('alertsServices', ['ngResource']);

alertsServices.factory('getClients', ['$resource',
  function($resource){
    return $resource('http://127.0.0.1\\:8080/alertasPld/clientes', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);

  alertsServices.factory('getTransactions', ['$resource',
    function($resource){
      return $resource('http://127.0.0.1\\:8080/alertasPld/transacciones', {}, {
        query: {method:'GET',isArray:true}
      });
    }]);

    alertsServices.factory('getTransactionsR', ['$resource',
      function($resource){
        return $resource('http://127.0.0.1\\:8080/alertasPld/transaccionesR', {}, {
          query: {method:'GET',isArray:true}
        });
      }]);

  alertsServices.factory('getAccounts', ['$resource',
      function($resource){
        return $resource('http://127.0.0.1\\:8080/alertasPld/cuentas', {}, {
          query: {method:'GET',isArray:true}
        });
      }]);

  alertsServices.factory('getAlerts', ['$resource',
        function($resource){
          return $resource('http://127.0.0.1\\:8080/alertasPld/alertas', {}, {
            query: {method:'GET',isArray:true}
          });
        }]);

        alertsServices.factory('getCrOp', ['$resource',
              function($resource){
                return $resource('http://127.0.0.1\\:8080/alertasPld/crOpInfo', {}, {
                  query: {method:'GET',isArray:true}
                });
              }]);
