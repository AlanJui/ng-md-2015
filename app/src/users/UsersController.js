import UserSheetController from 'users/UserSheetController';

class UsersController {

  /*@ngInject*/
  constructor(UsersService, $mdSidenav, $mdBottomSheet, $log) {
    let self = this;
    this.$log = $log.getInstance('SessionController');
    this.$log.debug('instanceOf()');

    this.$mdSidenav = $mdSidenav;
    this.$mdBottomSheet = $mdBottomSheet;

    this.selected     = null;
    this.users        = [ ];
    this.toggleList   = self.toggleUsersList;

    // Load all registered users

    UsersService
      .loadAll()
      .then( (users) => {
        self.users    = [].concat(users);
        self.selected = self.users[0];
      });
  }

  // *********************************
  // Internal methods
  // *********************************

  /**
   * Hide or Show the 'left' sideNav area
   */
  toggleUsersList() {
    let self = this;

    self.$log.debug( "toggleUsersList() ");
    self.$mdSidenav('left').toggle();
  }

  /**
   * Select the current avatars
   * @param menuId
   */
  selectUser ( user ) {
    let self = this;

    self.$log.debug( "selectUser( {name} ) ", user);

    self.selected = angular.isNumber(user) ? self.users[user] : user;
    self.toggleList();
  }

  /**
   * Show the bottom sheet
   */
  share($event) {
    let self = this;

    self.$log.debug( "contactUser()");

    self.$mdBottomSheet
      .show({
        parent: angular.element(document.getElementById('content')),
        templateUrl: '/src/users/view/contactSheet.html',
        locals: {user: self.selected},
        controller: [ '$mdBottomSheet', '$log', UserSheetController],
        controllerAs: 'vm',
        bindToController : true,
        targetEvent: $event
      })
      .then((clickedItem) => {
        self.$log.debug(`${clickedItem.name} clicked!`);
      });
  }
}

// export default [
//   'UsersService', '$mdSidenav', '$mdBottomSheet', '$log',
//   UsersController
// ];

export default UsersController;
