'use strict';

// Declare app level module which depends on views, and components
var alertsApp = angular.module('alertsAppStatic', [
  'ngRoute',
  'alertsControllers',
  'alertsServices',
  'alertsFilter'
]);

alertsApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
  ////////// CLIENTS ///////////////////////////////////////////
      when('/clients', {
        templateUrl: 'partials/clients-list.html',
        controller: 'ClientsListCtrl'
      }).
      when('/clients/:clientId', {
        templateUrl: 'partials/clients-list.html',
        controller: 'ClientsForClientIdCtrl'
      }).
////////// TRANSACTIONS ///////////////////////////////////////////
      when('/transactions', {
        templateUrl: 'partials/transactions-list.html',
        controller: 'TransactionsListCtrl'
      }).
      when('/transactions/:alertId', {
        templateUrl: 'partials/transactions-list.html',
        controller: 'TransactionsForAlertIdCtrl'
      }).
////////// TRANSACTIONS R///////////////////////////////////////////
            when('/transactionsR', {
              templateUrl: 'partials/transactionsR-list.html',
              controller: 'TransactionsRListCtrl'
            }).
            when('/transactionsR/:accountId', {
              templateUrl: 'partials/transactionsR-list.html',
              controller: 'TransactionsRForAccountIdCtrl'
            }).
////////// ACCOUNTS ///////////////////////////////////////////
      when('/accounts', {
        templateUrl: 'partials/accounts-list.html',
        controller: 'AccountsListCtrl'
      }).
      when('/accounts/:clientId', {
        templateUrl: 'partials/accounts-list.html',
        controller: 'AccountsForClientIdCtrl'
      }).
////////// ALERTS ///////////////////////////////////////////
      when('/alerts', {
        templateUrl: 'partials/alerts-list.html',
        controller: 'AlertsListCtrl'
      }).
      when('/alerts/:alertId', {
        templateUrl: 'partials/alerts-list.html',
        controller: 'AlertsForAlertIdCtrl'
      }).
////////// ALERTS ///////////////////////////////////////////
      when('/cr_info', {
        templateUrl: 'partials/cr-list.html',
          controller: 'CrOpListCtrl'
      }).
      when('/cr_info/:crId', {
        templateUrl: 'partials/cr-list.html',
          controller: 'CrOpForCrIdCtrl'
      }).
///////// MAPA //////////////////////////
    when('/map', {
      templateUrl: 'partials/mexico-map.html'
    }).
///////// USUARIOS NUEVOS //////////////////////////
    when('/new_user', {
      templateUrl: 'partials/new-user-form.html'
    }).
    otherwise({
        redirectTo: '/alerts'
      });
  }]);
