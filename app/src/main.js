// import home from 'home/Home';
import users from 'users/Users';

import { ExternalLogger } from 'utils/LogDecorator';

let $log = new ExternalLogger();
$log = $log.getInstance("BOOTSTRAP");
$log.debug("Configuraing 'main' module");

// export default angular.module('main', [ home, users ]).name;
export default angular.module('main', [ users ]).name;
