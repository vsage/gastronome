(function (app) {
  'use strict';

  angular.module("core").factory('fileUploader',['Upload', function(Upload){
    return {
      uploadFile: uploadFile
    }

    function uploadFile(file, callback, url) {
      Upload.upload({
          url: url,
          data: {file: file}
      }).then(function (resp) {
          console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
          callback(resp)
      }, function (resp) {
          handleError;
      }, function (evt) {
          var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
          console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
      });
    }

  }])
}());
