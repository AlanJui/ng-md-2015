// Load the Angular Material CSS associated with ngMaterial
// then load the main.css to provide overrides, etc.

import 'angular-material/angular-material.css!';
import 'assets/app.css!';

// Load Angular libraries

import angular from 'angular';
import material from 'angular-material';

// Load custom application modules

import main from 'app/main';

// Load loggers for injection and pre-angular debugging

import { LogDecorator, ExternalLogger } from 'utils/LogDecorator';


/**
 * Manually bootstrap the application when AngularJS and
 * the application classes have been loaded.
 */
angular
  .element( document )
  .ready( function() {

    let appName = 'app';
    let body = document.getElementsByTagName("body")[0];

    let $log = new ExternalLogger();
    $log = $log.getInstance( "BOOTSTRAP" );
    $log.debug( "Initializing '{0}'", [ appName ] );

    let app  = angular
          // .module( appName, [ material, main ] )
          .module( appName, [ 'ngMaterial', main ] )
          .config( ['$mdThemingProvider', ($mdThemingProvider) => {
            $mdThemingProvider.theme('default')
              .primaryPalette('brown')
              .accentPalette('red');
          }] )
          .config( ['$provide', LogDecorator] );

    angular.bootstrap( body, [ app.name ], { strictDi: false })

  });
