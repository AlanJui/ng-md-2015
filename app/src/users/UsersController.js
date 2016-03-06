class UsersController {

  /*@ngInject*/
  constructor(UsersService, $mdSidenav, $mdBottomSheet, $log) {
    this.$log = $log.getInstance('SessionController');
    this.$log.debug('instanceOf()');

    this.$mdSidenav = $mdSidenav;
    this.$mdBottomSheet = $mdBottomSheet;

    this.selected     = null;
    this.users        = [ ];
    this.toggleList   = this.toggleUsersList;
    // this.selectUser   = this.selectUser;
    // this.share        = this.share;

    // Load all registered users

    UsersService
      .loadAll()
      .then( (users) => {
        this.users    = [].concat(users);
        this.selected = this.users[0];
      });
  }

  // *********************************
  // Internal methods
  // *********************************

  /**
   * Hide or Show the 'left' sideNav area
   */
  toggleUsersList() {
    this.$log.debug( "toggleUsersList() ");
    this.$mdSidenav('left').toggle();
  }

  /**
   * Select the current avatars
   * @param menuId
   */
  selectUser ( user ) {
    this.$log.debug( "selectUser( {name} ) ", user);

    this.selected = angular.isNumber(user) ? this.users[user] : user;
    this.toggleList();
  }

  /**
   * Show the bottom sheet
   */
  share($event) {
    $log.debug( "contactUser()");

    let user = this.selected;

    $mdBottomSheet.show({
      parent: angular.element(document.getElementById('content')),
      templateUrl: '/src/users/view/contactSheet.html',
      controller: [ '$mdBottomSheet', '$log', UserSheetController],
      controllerAs: "vm",
      bindToController : true,
      targetEvent: $event
    }).then(function(clickedItem) {
      $log.debug( clickedItem.name + ' clicked!');
    });

    /**
     * Bottom Sheet controller for the Avatar Actions
     */
    function UserSheetController( $mdBottomSheet, $log ) {

      $log = $log.getInstance( "UserSheetController" );
      $log.debug( "instanceOf() ");

      this.user = user;
      this.items = [
        { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'},
        { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/svg/twitter.svg'},
        { name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/svg/google_plus.svg'},
        { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'assets/svg/hangouts.svg'}
      ];
      this.performAction = function(action) {
        $log.debug( "makeContactWith( {name} )", action);
        $mdBottomSheet.hide(action);
      };

    }
  }
}

// export default [
//   'UsersService', '$mdSidenav', '$mdBottomSheet', '$log',
//   UsersController
// ];

export default UsersController;
