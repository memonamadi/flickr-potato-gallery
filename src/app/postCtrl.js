angular.module('app')
.controller('PostController', ['PhotoService', function (PhotoService) {
  var vm = this;

  vm.PhotoService = PhotoService;
  vm.showMain = showMain;

  function showMain() {
    PhotoService.changeState('main', true);
    PhotoService.changeState('post', false);
  }

}]);
