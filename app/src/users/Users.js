// Constants

const URL_AVATAR_ICONS = 'assets/svg/avatars.svg';
const URL_ICON_MENU    = 'assets/svg/menu.svg';
const URL_ICON_SHARE   = 'assets/svg/share.svg';

// Load the custom app ES2015 modules

import UsersController from 'users/UsersController';
import UsersService from 'users/UsersDataService';

import { ExternalLogger } from 'utils/LogDecorator';

let $log = new ExternalLogger();
$log = $log.getInstance("BOOTSTRAP");
$log.debug(`Configuring 'users' module`);

// Define the Angular 'home' module
let module = angular.module('users', [])
  .service('UsersService', UsersService)
  .controller('UsersController', UsersController)
  .config( ($mdIconProvider) => {

    $log.debug( "Configuring $mdIconProvider" );

    // Register `dashboard` iconset & icons for $mdIcon service lookups

    $mdIconProvider
      .defaultIconSet( URL_AVATAR_ICONS, 128 )
      .icon('menu' ,URL_ICON_MENU, 24)
      .icon('share',URL_ICON_SHARE, 24);

  });

export default module.name;
