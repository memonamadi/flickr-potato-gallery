angular.module('app')
.controller('MainController', ['$http', 'PhotoService', function ($http, PhotoService) {
  var vm = this;

  vm.PhotoService = PhotoService;
  vm.showPost = showPost;
  vm.photos = [];
  vm.error = '';

  PhotoService.fetchPhotos()
    .then(function (data) {
      vm.photos = data;
    }, function () {
      vm.error = 'unable to retrieve data';
    });

  function showPost(currentPhoto) {
    PhotoService.currentPhoto = currentPhoto;
    PhotoService.changeState('main', false);
    PhotoService.changeState('post', true);
  }
}]);
