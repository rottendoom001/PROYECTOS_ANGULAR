'use strict';

/* Filters */

angular.module('alertsFilter', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
