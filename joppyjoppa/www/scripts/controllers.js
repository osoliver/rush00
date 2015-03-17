angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})


.controller('Jqcloud', function($scope) {

    $scope.displayJobs = function(value){
      if (value != "") {
          $scope.currentTags = [];
        for (var i = 0; i < $scope.offerTags.length; ++i) {
          if (angular.lowercase($scope.offerTags[i].text).indexOf(angular.lowercase(value)) >= 0) {
            $scope.currentTags.push($scope.offerTags[i]);
          }
        }
      } else {
        $scope.updateCurrentTags();
      }
    };

    $scope.updateCurrentTags = function() {
      $scope.currentTags = [
        {text: "Serveur", weight: 24},
        {text: "Vendeuse", weight: 3, link: "http://www.google.com"},
        {text: "Barman", weight: 1}
      ];
    };

/* fonction de controle de la chaine JOB. On verifie si la chaine contient au moins 2 caracteres et si le job est present dans notre base. */
    $scope.jobValidation = function(value) {
      if (value.length > 1) {
        for (var i = 0; i < $scope.currentTags.length; ++i) {
          if (angular.lowercase($scope.currentTags[i].text) == angular.lowercase(value)) {
            $scope.offer.job = $scope.currentTags[i];
            return 1;
          }
        }
        $scope.offer.job = {text: value, weight: 1};
        return 1;
      }
      return 0;
    };

    $scope.jobsEvent = function(value, event) {
      if (event.keyCode !== 13) {
          $scope.displayJobs(value);
      } else {
        $scope.jobValidation(value);
      }
    }

    $scope.offer = {};

    $scope.updateCurrentTags();

    $scope.jobPlaceholder = "Serveur, hotesse d'accueil, déménageur";

    $scope.value = "";

    $scope.skillsTags = [
      {text: "qualifié", weight: 1},
      {text: "expérimenté", weight: 5},
      {text: "gracieux", weight: 1},
      {text: "flexible", weight: 10},
      {text: "travailleur", weight: 12},
      {text: "conséquent", weight: 5},
    ];

    $scope.offerTags = [
      {text: "Serveur", weight: 24, skills: {
        skillsArray : [
          {text: "qualifié", weight: 1},
          {text: "expérimenté", weight: 5},
          {text: "gracieux", weight: 1}
        ]
      }
    },
      {text: "Vendeuse", weight: 3, link: "http://www.google.com"},
      {text: "Barman", weight: 1, skills: {
        skills : [
          {text: "jongleur", weight: 3},
          {text: "drole", weight: 5},
          {text: "sympa", weight: 1}
        ]
      }},
      {text: "Hotesse d'accueil", weight: 5},
      {text: "Dora", weight: 1},
      {text: "Salut", weight: 10},
      {text: "Sophie", weight: 12},
      {text: "masseur", weight: 5},
      {text: "Dj", weight: 1},
      {text: "Demenageur", weight: 10},
      {text: "Manutentionnaire", weight: 2}
    ];
    $scope.colors = ["#800026", "#bd0026", "#e31a1c", "#fc4e2a", "#fd8d3c", "#feb24c", "#fed976"];
  });
