const MODULE_NAME = 'home';

// Load the custom app ES2015 modules

import HomeController from 'home/HomeController';

import {
  ExternalLogger
}
from 'utils/LogDecorator';

let $log = new ExternalLogger();
$log = $log.getInstance("BOOTSTRAP");
$log.debug(`Configuring '${MODULE_NAME}' module`);

// Define the Angular 'home' module
let module = angular.module(MODULE_NAME, [])
  .controller('HomeController', HomeController);

export default module.name;
