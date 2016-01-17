require('angular');
require('angular-mocks/angular-mocks');

var testsContext = require.context(".", true, /.test$/);
console.log(testsContext.keys());

testsContext.keys().forEach(testsContext);

