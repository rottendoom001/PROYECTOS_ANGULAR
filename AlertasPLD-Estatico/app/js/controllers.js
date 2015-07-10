
var alertsControllers = angular.module('alertsControllers', []);


//////////////////////////////// ALERTAS
alertsControllers.controller('AlertsListCtrl', ['$scope', 'getAlerts',
 function($scope, getAlerts) {
   $scope.alerts = getAlerts.query();
 }]);

 alertsControllers.controller('AlertsForAlertIdCtrl', ['$scope','$routeParams','getAlerts',
  function($scope,$routeParams, getAlerts) {
    $scope.alerts = getAlerts.query({idAlerta:$routeParams.alertId});
  }]);

 //////////////////////////////// CLIENTES
 alertsControllers.controller('ClientsListCtrl', ['$scope', 'getClients',
  function($scope,getClients) {
    $scope.clients = getClients.query();
  }]);

  alertsControllers.controller('ClientsForClientIdCtrl', ['$scope','$routeParams', 'getClients',
   function($scope,$routeParams,getClients) {
     $scope.clients = getClients.query({idCliente:$routeParams.clientId});
   }]);

  //////////////////////////////// TRANSACCIONES
  alertsControllers.controller('TransactionsListCtrl', ['$scope','getTransactions',
   function($scope,getTransactions) {
     $scope.transactions = getTransactions.query();
   }]);

   alertsControllers.controller('TransactionsForAlertIdCtrl', ['$scope','$routeParams', 'getTransactions',
    function($scope,$routeParams,getTransactions) {
      $scope.transactions = getTransactions.query({idAlerta:$routeParams.alertId});
    }]);
    //////////////////////////////// TRANSACCIONES RELEVANTES
    alertsControllers.controller('TransactionsRListCtrl', ['$scope','getTransactionsR',
     function($scope,getTransactionsR) {
       $scope.transactionsR = getTransactionsR.query();
     }]);

     alertsControllers.controller('TransactionsRForAccountIdCtrl', ['$scope','$routeParams', 'getTransactionsR',
      function($scope,$routeParams,getTransactionsR) {
        $scope.transactionsR = getTransactionsR.query({idCuenta:$routeParams.accountId});
      }]);
    //////////////////////////////// ACCOUNTS
    alertsControllers.controller('AccountsListCtrl', ['$scope','getAccounts',
     function($scope,getAccounts) {
       $scope.accounts = getAccounts.query();
     }]);

     alertsControllers.controller('AccountsForClientIdCtrl', ['$scope','$routeParams', 'getAccounts',
      function($scope,$routeParams,getAccounts) {
        $scope.accounts = getAccounts.query({idCliente:$routeParams.clientId});
      }]);
      //////////////////////////////// CR OPERATIONS
      alertsControllers.controller('CrOpListCtrl', ['$scope','getCrOp',
       function($scope,getCrOp) {
         $scope.crOp = getCrOp.query();
       }]);

       alertsControllers.controller('CrOpForCrIdCtrl', ['$scope','$routeParams', 'getCrOp',
        function($scope,$routeParams,getCrOp) {
          $scope.crOp = getCrOp.query({idCr:$routeParams.crId});
        }]);
