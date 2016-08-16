angular.module('app')
.service('PhotoService', ['$http', function ($http) {
  var photosObj = {
    mainViewActive: true,
    postViewActive: false,
    fetchPhotos: fetchPhotos,
    changeState: changeState,
    currentPhoto: {}
  };

  function fetchPhotos() {
    var url = 'https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&format=json&jsoncallback=JSON_CALLBACK';
    return $http.jsonp(url)
            .then(jsonFlickrFeed = function (response) {
              return response.data;
            });
  }

  function changeState(metric, state) {
    if(metric === 'main') {
      photosObj.mainViewActive = state;
    } else if(metric === 'post') {
      photosObj.postViewActive = state;
    } else {
      return false;
    }
  }

  return photosObj;
}]);
