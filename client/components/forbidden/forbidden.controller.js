'use strict';

(function(){

class ForbiddenComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('videoClubApp')
  .component('forbidden', {
    templateUrl: 'components/forbidden/forbidden.html',
    controller: ForbiddenComponent,
    //controllerAs: 'forbiddenCtrl'
  });

})();
