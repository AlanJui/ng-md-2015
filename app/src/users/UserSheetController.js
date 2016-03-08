/**
 * Bottom Sheet controller for the Avatar Actions
 */

 'user strict';
class UserSheetController {

  /*@ngInject*/
  constructor($mdBottomSheet, $log) {
    this.$mdBottomSheet = $mdBottomSheet;

    this.$log = $log.getInstance( 'UserSheetController' );
    this.$log.debug(`instanceOf() `);

    this.items = [
      { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'},
      { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/svg/twitter.svg'},
      { name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/svg/google_plus.svg'},
      { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'assets/svg/hangouts.svg'}
    ];
  };

  performAction(action) {
    // this.$log.debug( "makeContactWith( {name} )", action);
    this.$log.debug(`makeContactWith( ${action.name} )`);
    this.$mdBottomSheet.hide(action);
  }
}

export default UserSheetController;
