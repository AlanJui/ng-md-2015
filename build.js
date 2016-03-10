!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in p||(p[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==v.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=p[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(v.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=p[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return x[e]||(x[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=p[s],v=x[s];v?l=v.exports:c&&!c.declarative?l=c.esModule:c?(d(c),v=c.module,l=v.exports):l=f(s),v&&v.importers?(v.importers.push(t),t.dependencies.push(v)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=p[e];if(t)t.declarative?c(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=f(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=p[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){if(r===e)return r;var t={};if("object"==typeof r||"function"==typeof r)if(g){var n;for(var o in r)(n=Object.getOwnPropertyDescriptor(r,o))&&h(t,o,n)}else{var a=r&&r.hasOwnProperty;for(var o in r)(!a||r.hasOwnProperty(o))&&(t[o]=r[o])}return t["default"]=r,h(t,"__useDefault",{value:!0}),t}function c(r,t){var n=p[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==v.call(t,u)&&(p[u]?c(u,t):f(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function f(e){if(D[e])return D[e];if("@node/"==e.substr(0,6))return y(e.substr(6));var r=p[e];if(!r)throw"Module "+e+" not present.";return a(e),c(e,[]),p[e]=void 0,r.declarative&&h(r.module.exports,"__esModule",{value:!0}),D[e]=r.declarative?r.module.exports:r.esModule}var p={},v=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},g=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(m){g=!1}var h;!function(){try{Object.defineProperty({},"a",{})&&(h=Object.defineProperty)}catch(e){h=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var x={},y="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,D={"@empty":{}};return function(e,n,o){return function(a){a(function(a){for(var u={_nodeRequire:y,register:r,registerDynamic:t,get:f,set:function(e,r){D[e]=r},newModule:function(e){return e}},d=0;d<n.length;d++)(function(e,r){r&&r.__esModule?D[e]=r:D[e]=s(r)})(n[d],arguments[d]);o(u);var i=f(e[0]);if(e.length>1)for(var d=1;d<e.length;d++)f(e[d]);return i.__useDefault?i["default"]:i})}}}("undefined"!=typeof self?self:global)

(["1","1"], [], function($__System) {

$__System.register('2', ['3', '4'], function (_export) {
  var _createClass, _classCallCheck, UserSheetController;

  return {
    setters: [function (_) {
      _createClass = _['default'];
    }, function (_2) {
      _classCallCheck = _2['default'];
    }],
    execute: function () {
      /**
       * Bottom Sheet controller for the Avatar Actions
       */

      'use strict';

      'user strict';

      UserSheetController = (function () {

        /*@ngInject*/

        function UserSheetController($mdBottomSheet, $log) {
          _classCallCheck(this, UserSheetController);

          this.$mdBottomSheet = $mdBottomSheet;

          this.$log = $log.getInstance('UserSheetController');
          this.$log.debug('instanceOf() ');

          this.items = [{ name: 'Phone', icon: 'phone', icon_url: 'assets/svg/phone.svg' }, { name: 'Twitter', icon: 'twitter', icon_url: 'assets/svg/twitter.svg' }, { name: 'Google+', icon: 'google_plus', icon_url: 'assets/svg/google_plus.svg' }, { name: 'Hangout', icon: 'hangouts', icon_url: 'assets/svg/hangouts.svg' }];
        }

        _createClass(UserSheetController, [{
          key: 'performAction',
          value: function performAction(action) {
            // this.$log.debug( "makeContactWith( {name} )", action);
            this.$log.debug('makeContactWith( ' + action.name + ' )');
            this.$mdBottomSheet.hide(action);
          }
        }]);

        return UserSheetController;
      })();

      _export('default', UserSheetController);
    }
  };
});
$__System.register('5', ['2', '3', '4'], function (_export) {
  var UserSheetController, _createClass, _classCallCheck, UsersController;

  return {
    setters: [function (_3) {
      UserSheetController = _3['default'];
    }, function (_) {
      _createClass = _['default'];
    }, function (_2) {
      _classCallCheck = _2['default'];
    }],
    execute: function () {
      'use strict';

      UsersController = (function () {

        /*@ngInject*/

        function UsersController(UsersService, $mdSidenav, $mdBottomSheet, $log) {
          _classCallCheck(this, UsersController);

          var self = this;
          this.$log = $log.getInstance('SessionController');
          this.$log.debug('instanceOf()');

          this.$mdSidenav = $mdSidenav;
          this.$mdBottomSheet = $mdBottomSheet;

          this.selected = null;
          this.users = [];
          this.toggleList = self.toggleUsersList;

          // Load all registered users

          UsersService.loadAll().then(function (users) {
            self.users = [].concat(users);
            self.selected = self.users[0];
          });
        }

        // export default [
        //   'UsersService', '$mdSidenav', '$mdBottomSheet', '$log',
        //   UsersController
        // ];

        // *********************************
        // Internal methods
        // *********************************

        /**
         * Hide or Show the 'left' sideNav area
         */

        _createClass(UsersController, [{
          key: 'toggleUsersList',
          value: function toggleUsersList() {
            var self = this;

            self.$log.debug("toggleUsersList() ");
            self.$mdSidenav('left').toggle();
          }

          /**
           * Select the current avatars
           * @param menuId
           */
        }, {
          key: 'selectUser',
          value: function selectUser(user) {
            var self = this;

            self.$log.debug("selectUser( {name} ) ", user);

            self.selected = angular.isNumber(user) ? self.users[user] : user;
            self.toggleList();
          }

          /**
           * Show the bottom sheet
           */
        }, {
          key: 'share',
          value: function share($event) {
            var self = this;

            self.$log.debug("contactUser()");

            self.$mdBottomSheet.show({
              parent: angular.element(document.getElementById('content')),
              templateUrl: '/src/users/view/contactSheet.html',
              locals: { user: self.selected },
              controller: ['$mdBottomSheet', '$log', UserSheetController],
              controllerAs: 'vm',
              bindToController: true,
              targetEvent: $event
            }).then(function (clickedItem) {
              self.$log.debug(clickedItem.name + ' clicked!');
            });
          }
        }]);

        return UsersController;
      })();

      _export('default', UsersController);
    }
  };
});
$__System.registerDynamic("6", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
  return module.exports;
});

$__System.registerDynamic("7", ["6"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('6');
  module.exports = function defineProperty(it, key, desc) {
    return $.setDesc(it, key, desc);
  };
  return module.exports;
});

$__System.registerDynamic("8", ["7"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('7'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("3", ["8"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _Object$defineProperty = $__require('8')["default"];
  exports["default"] = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        _Object$defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  exports.__esModule = true;
  return module.exports;
});

$__System.registerDynamic("4", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports["default"] = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  exports.__esModule = true;
  return module.exports;
});

$__System.register("9", ["3", "4"], function (_export) {
  var _createClass, _classCallCheck, UsersDataService;

  return {
    setters: [function (_) {
      _createClass = _["default"];
    }, function (_2) {
      _classCallCheck = _2["default"];
    }],
    execute: function () {
      /**
       * Users DataService
       * Uses embedded, hard-coded data model; acts asynchronously to simulate
       * remote data service call(s).
       *
       * @returns {{loadAll: Function}}
       * @constructor
       */

      "use strict";

      UsersDataService = (function () {

        /*@ngInject*/

        function UsersDataService($q, $log) {
          _classCallCheck(this, UsersDataService);

          this.$q = $q;

          this.$log = $log.getInstance("UsersDataService");
          this.$log.debug("instanceOf() ");

          this.users = [{
            name: 'Lia Lugo',
            avatar: 'svg-1',
            content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
          }, {
            name: 'George Duke',
            avatar: 'svg-2',
            content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.'
          }, {
            name: 'Gener Delosreyes',
            avatar: 'svg-3',
            content: "Raw denim pour-over readymade Etsy Pitchfork. Four dollar toast pickled locavore bitters McSweeney's blog. Try-hard art party Shoreditch selfies. Odd Future butcher VHS, disrupt pop-up Thundercats chillwave vinyl jean shorts taxidermy master cleanse letterpress Wes Anderson mustache Helvetica. Schlitz bicycle rights chillwave irony lumberhungry Kickstarter next level sriracha typewriter Intelligentsia, migas kogi heirloom tousled. Disrupt 3 wolf moon lomo four loko. Pug mlkshk fanny pack literally hoodie bespoke, put a bird on it Marfa messenger bag kogi VHS."
          }, {
            name: 'Lawrence Ray',
            avatar: 'svg-4',
            content: 'Scratch the furniture spit up on light gray carpet instead of adjacent linoleum so eat a plant, kill a hand pelt around the house and up and down stairs chasing phantoms run in circles, or claw drapes. Always hungry pelt around the house and up and down stairs chasing phantoms.'
          }, {
            name: 'Ernesto Urbina',
            avatar: 'svg-5',
            content: 'Webtwo ipsum dolor sit amet, eskobo chumby doostang bebo. Bubbli greplin stypi prezi mzinga heroku wakoopa, shopify airbnb dogster dopplr gooru jumo, reddit plickers edmodo stypi zillow etsy.'
          }, {
            name: 'Gani Ferrer',
            avatar: 'svg-6',
            content: "Lebowski ipsum yeah? What do you think happens when you get rad? You turn in your library card? Get a new driver's license? Stop being awesome? Dolor sit amet, consectetur adipiscing elit praesent ac magna justo pellentesque ac lectus. You don't go out and make a living dressed like that in the middle of a weekday. Quis elit blandit fringilla a ut turpis praesent felis ligula, malesuada suscipit malesuada."
          }];
        }

        // export default [ '$q', '$log', UsersDataService ];

        // Promise-based API

        _createClass(UsersDataService, [{
          key: "loadAll",
          value: function loadAll() {
            this.$log.debug("loadAll()");

            // Simulate async nature of real remote calls
            return this.$q.when(this.users);
          }
        }]);

        return UsersDataService;
      })();

      _export("default", UsersDataService);
    }
  };
});
$__System.register('a', ['5', '9', 'b'], function (_export) {
  'use strict';

  // Load the custom app ES2015 modules

  var UsersController, UsersService, ExternalLogger, URL_AVATAR_ICONS, URL_ICON_MENU, URL_ICON_SHARE, $log, _module;

  return {
    setters: [function (_) {
      UsersController = _['default'];
    }, function (_2) {
      UsersService = _2['default'];
    }, function (_b) {
      ExternalLogger = _b.ExternalLogger;
    }],
    execute: function () {
      URL_AVATAR_ICONS = 'assets/svg/avatars.svg';
      URL_ICON_MENU = 'assets/svg/menu.svg';
      URL_ICON_SHARE = 'assets/svg/share.svg';
      $log = new ExternalLogger();

      $log = $log.getInstance("BOOTSTRAP");
      $log.debug('Configuring \'users\' module');

      // Define the Angular 'home' module
      _module = angular.module('users', []).service('UsersService', UsersService).controller('UsersController', UsersController).config(function ($mdIconProvider) {

        $log.debug("Configuring $mdIconProvider");

        // Register `dashboard` iconset & icons for $mdIcon service lookups

        $mdIconProvider.defaultIconSet(URL_AVATAR_ICONS, 128).icon('menu', URL_ICON_MENU, 24).icon('share', URL_ICON_SHARE, 24);
      });

      _export('default', _module.name);
    }
  };
});
$__System.register('c', [], function (_export) {
    'use strict';

    /**
     * @author      Thomas Burleson
     * @date        November, 2013
     * @description
     *
     *  String supplant global utility (similar to but more powerful than sprintf() ).
     *
     *  Usages:
     *
     *      var user = {
     *              first : "Thomas",
     *              last  : "Burleson",
     *              address : {
     *                  city : "West Des Moines",
     *                  state: "Iowa"
     *              },
     *              contact : {
     *                  email : "ThomasBurleson@Gmail.com"
     *                  url   : "http://www.gridlinked.info"
     *              }
     *          },
     *          message = "Hello Mr. {first} {last}. How's life in {address.city}, {address.state} ?";
     *
     *     return supplant( message, user );
     *
     *
     * NOTE: this supplant() method is from Crockfords `Remedial Javascript`
     *
     */
    function supplant(template, values, pattern) {
        pattern = pattern || /\{([^\{\}]*)\}/g;

        return template.replace(pattern, function (a, b) {
            var p = b.split('.'),
                r = values;

            try {
                for (var s in p) {
                    r = r[p[s]];
                }
            } catch (e) {
                r = a;
            }

            return typeof r === 'string' || typeof r === 'number' ? r : a;
        });
    }

    // supplant() method from Crockfords `Remedial Javascript`
    return {
        setters: [],
        execute: function () {
            _export('default', supplant);

            Function.prototype.method = function (name, func) {
                this.prototype[name] = func;
                return this;
            };

            String.method("supplant", function (values, pattern) {
                var self = this;
                return supplant(self, values, pattern);
            });

            String.supplant = supplant;
        }
    };
});
$__System.register('b', ['c'], function (_export) {
    'use strict';

    /**
     * Decorate the $log to use inject the LogEnhancer features.
     *
     * @param {object} $provide The log console.
     * @returns {object} promise.
     * @private
     */
    function LogDecorator($provide) {
        // Register our $log decorator with AngularJS $provider

        $provide.decorator('$log', ["$delegate", function ($delegate) {

            return enhanceLog($delegate);
        }]);
    }

    function ExternalLogger() {
        /**
         * Determines if the requested console logging method is available, since it is not with IE.
         *
         * @param {Function} method The request console logging method.
         * @returns {object} Indicates if the console logging method is available.
         * @private
         */
        var prepareLogToConsole = function prepareLogToConsole(method) {
            var console = window.console,
                isFunction = function isFunction(fn) {
                return typeof fn == typeof Function;
            },
                isAvailableConsoleFor = function isAvailableConsoleFor(method) {
                var isPhantomJS = new BrowserDetect().browser != "PhantomJS";

                // NOTE: Tried using this for less logging in the console/terminal, but then logging in IDE is
                // wiped out as well return console && console[method] && isFunction(console[method]) && isPhantomJS;

                return console && console[method] && isFunction(console[method]);
            },
                logFn = function logFn(message) {
                if (isAvailableConsoleFor(method)) {
                    try {
                        console[method](message);
                    } catch (e) {}
                }
            };

            return logFn;
        },
            $log = {
            log: prepareLogToConsole("log"),
            info: prepareLogToConsole("info"),
            warn: prepareLogToConsole("warn"),
            debug: prepareLogToConsole("debug"),
            error: prepareLogToConsole("error")
        };

        // Publish instance of $log simulator; with enhanced functionality
        return new enhanceLog($log);
    }

    function enhanceLog($log) {
        var separator = "::",

        /**
         * Cached DateTime formatter
         */
        dateFormatter = new DateTime(),
            detector = new BrowserDetect(),

        /**
         * Capture the original $log functions; for use in enhancedLogFn()
         */
        _$log = (function ($log) {
            return {
                log: $log.log,
                info: $log.info,
                warn: $log.warn,
                debug: $log.debug,
                error: $log.error
            };
        })($log),

        /**
         * Chrome Dev tools supports color logging
         * @see https://developers.google.com/chrome-developer-tools/docs/console#styling_console_output_with_css
         */
        colorify = function colorify(message, colorCSS) {
            var isChrome = detector.browser == "Chrome",
                canColorize = isChrome && colorCSS !== undefined;

            return canColorize ? ["%c" + message, colorCSS] : [message];
        },

        /**
         * Partial application to pre-capture a logger function
         */
        prepareLogFn = function prepareLogFn(logFn, className, colorCSS) {
            /**
             * Invoke the specified `logFn` with the supplant functionality...
             */
            var supplant = String.supplant;
            var enhancedLogFn = function enhancedLogFn() {
                try {
                    var args = Array.prototype.slice.call(arguments);

                    // prepend a timestamp and optional classname to the original output message
                    args[0] = supplant("{0} - {1}{2}", [dateFormatter.now(), className, args[0]]);
                    args = colorify(supplant.apply(null, args), colorCSS);

                    logFn.apply(null, args);
                } catch (error) {
                    $log.error("LogEnhancer ERROR: " + error);
                }
            };

            // Only needed to support angular-mocks expectations
            enhancedLogFn.logs = [];

            return enhancedLogFn;
        },

        /**
         * Support to generate class-specific logger instance with classname only
         */
        getInstance = function getInstance(className, colorCSS, customSeparator) {
            className = className !== undefined ? className + (customSeparator || separator) : "";

            var instance = {
                log: prepareLogFn(_$log.log, className, colorCSS),
                info: prepareLogFn(_$log.info, className, colorCSS),
                warn: prepareLogFn(_$log.warn, className, colorCSS),
                debug: prepareLogFn(_$log.debug, className, colorCSS),
                error: prepareLogFn(_$log.error, className) // NO styling of ERROR messages
            };

            // Attach instance specific tryCatch() functionality...
            instance.tryCatch = makeTryCatch(instance.error, instance);

            return instance;
        };

        // Add special method to AngularJS $log
        $log.getInstance = getInstance;

        return $log;
    }

    /**
     * Implement a tryCatch() method that logs exceptions for method invocations AND
     * promise rejection activity.
     *
     * @param notifyFn      Function used to log.debug exception information
     * @param scope         Object Receiver for the notifyFn invocation
     *
     * @return Function used to guard and invoke the targeted actionFn
     */
    function makeTryCatch(notifyFn, scope) {
        /**
         * Report error (with stack trace if possible) to the logger function
         */
        var reportError = function reportError(reason) {
            if (notifyFn != null) {
                var error = reason && reason.stack ? reason : null,
                    message = reason != null ? String(reason) : "";

                if (error != null) {
                    message = error.message + "\n" + error.stack;
                }

                notifyFn.apply(scope, [message]);
            }

            return reason;
        },

        /**
         * Publish the tryCatch() guard 'n report function
         */
        tryCatch = function tryCatch(actionFn, scope, args) {
            try {
                // Invoke the targeted `actionFn`
                var result = angular.isFunction(actionFn) ? actionFn.apply(scope, args || []) : String(actionFn),
                    promise = angular.isObject(result) && result.then ? result : null;

                if (promise != null) {
                    // Catch and report any promise rejection reason...
                    promise.then(null, reportError);
                }

                actionFn = null;
                return result;
            } catch (e) {
                actionFn = null;
                throw reportError(e);
            }
        };

        return tryCatch;
    }

    /**
     * @author     Thomas Burleson
     * @author     StackOverflow - Harto, http://stackoverflow.com/questions/2315408/how-do-i-format-a-timestamp-in-javascript-to-display-it-in-graphs-utc-is-fine
     * @description
     *
     * DateTime utility class that spits out UTC timestamp strings usually used in a reporting, print-capable process.
     */
    function DateTime() {
        /**
         * Creates a date timestamp string.
         */
        var buildTimeString = function buildTimeString(date, format) {
            format = format || "%h:%m:%s:%z";

            function pad(value, isMilliSeconds) {
                if (typeof isMilliSeconds === "undefined") {
                    isMilliSeconds = false;
                }
                if (isMilliSeconds) {
                    if (value < 10) {
                        value = "00" + value;
                    } else if (value < 100) {
                        value = "0" + value;
                    }
                }
                return value.toString().length < 2 ? "0" + value : value;
            }

            return format.replace(/%([a-zA-Z])/g, function (_, fmtCode) {
                switch (fmtCode) {
                    case "Y":
                        return date.getFullYear();
                    case "M":
                        return pad(date.getMonth() + 1);
                    case "d":
                        return pad(date.getDate());
                    case "h":
                        return pad(date.getHours());
                    case "m":
                        return pad(date.getMinutes());
                    case "s":
                        return pad(date.getSeconds());
                    case "z":
                        return pad(date.getMilliseconds(), true);
                    default:
                        throw new Error("Unsupported format code: " + fmtCode);
                }
            });
        };

        // Publish API for DateTime utils
        return {
            now: function now() {
                return buildTimeString(new Date());
            }
        };
    }

    function BrowserDetect() {

        // NOTE: It's important to list PhantomJS first since it has the same browser information as Safari
        this.dataBrowser = [{
            string: "PhantomJS",
            subString: "PhantomJS",
            identity: "PhantomJS",
            versionSearch: "PhantomJS"
        }, {
            string: navigator.userAgent,
            subString: "Chrome",
            identity: "Chrome"
        }, {
            string: navigator.userAgent,
            subString: "OmniWeb",
            versionSearch: "OmniWeb/",
            identity: "OmniWeb"
        }, {
            string: navigator.vendor,
            subString: "Apple",
            identity: "Safari",
            versionSearch: "Version"
        }, {
            prop: window.opera,
            identity: "Opera",
            versionSearch: "Version"
        }, {
            string: navigator.vendor,
            subString: "iCab",
            identity: "iCab"
        }, {
            string: navigator.vendor,
            subString: "KDE",
            identity: "Konqueror"
        }, {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "Firefox"
        }, {
            string: navigator.vendor,
            subString: "Camino",
            identity: "Camino"
        }, { // for newer Netscapes (6+)
            string: navigator.userAgent,
            subString: "Netscape",
            identity: "Netscape"
        }, {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "Explorer",
            versionSearch: "MSIE"
        }, {
            string: navigator.userAgent,
            subString: "Gecko",
            identity: "Mozilla",
            versionSearch: "rv"
        }, {
            // for older Netscapes (4-)
            string: navigator.userAgent,
            subString: "Mozilla",
            identity: "Netscape",
            versionSearch: "Mozilla"
        }], this.dataOS = [{
            string: navigator.platform,
            subString: "Win",
            identity: "Windows"
        }, {
            string: navigator.platform,
            subString: "Mac",
            identity: "Mac"
        }, {
            string: navigator.userAgent,
            subString: "iPhone",
            identity: "iPhone/iPod"
        }, {
            string: navigator.platform,
            subString: "Linux",
            identity: "Linux"
        }];

        this.init();
    }

    return {
        setters: [function (_c) {}],
        execute: function () {
            _export('LogDecorator', LogDecorator);

            _export('ExternalLogger', ExternalLogger);

            BrowserDetect.prototype = {

                /**
                 * Sets the browser version and OS(Operating Systems) uses {@link mindspace.utils:BrowserDetect#searchString searchString}
                 * and {@link mindspace.utils:BrowserDetect#searchVersion searchVersion} internally
                 */
                init: function init() {
                    this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
                    this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
                    this.OS = this.searchString(this.dataOS) || "an unknown OS";

                    return this;
                },

                /**
                 * Checks whether the browser is IE8. Root element(html) is already set with class='ie8
                 * this function uses the same class reference and provides the status.
                 */
                isIE8: function isIE8() {
                    return document.documentElement.hasAttribute("class") && document.documentElement.getAttribute("class") === "ie8";
                },

                /**
                 * User for determining the browser and OS based on the input provided by the data param.
                 * Also sets the versionSearchString parameter which would be used by
                 * {@link mindspace.utils:BrowserDetect#searchVersion searchVersion}
                 */
                searchString: function searchString(data) {
                    for (var i = 0; i < data.length; i++) {
                        var dataString = data[i].string;
                        var dataProp = data[i].prop;

                        this.versionSearchString = data[i].versionSearch || data[i].identity;
                        if (dataString) {
                            if (dataString.indexOf(data[i].subString) != -1) {
                                return data[i].identity;
                            }
                        } else if (dataProp) {
                            return data[i].identity;
                        }
                    }
                },

                /**
                 * User for determining the browser version based on input string
                 */
                searchVersion: function searchVersion(dataString) {
                    var index = dataString.indexOf(this.versionSearchString);
                    if (index == -1) {
                        return;
                    }
                    return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
                }

            };
        }
    };
});
$__System.register('1', ['a', 'b'], function (_export) {
  // import home from 'home/Home';
  'use strict';

  var users, ExternalLogger, $log;
  return {
    setters: [function (_a) {
      users = _a['default'];
    }, function (_b) {
      ExternalLogger = _b.ExternalLogger;
    }],
    execute: function () {
      $log = new ExternalLogger();

      $log = $log.getInstance("BOOTSTRAP");
      $log.debug("Configuraing 'main' module");

      // export default angular.module('main', [ home, users ]).name;

      _export('default', angular.module('main', [users]).name);
    }
  };
});
})
(function(factory) {
  factory();
});
//# sourceMappingURL=build.js.map