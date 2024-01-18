// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

var app = angular.module('myapp', ['ngRoute'])
  .controller('myctrl', function
    ($scope, $http) {
    $scope.list = [];
    $http.get('data.json').then(
      function (res) {
        $scope.list = res.data;
        $scope.page = 1;
        $scope.limit = 6;
        $scope.start = ($scope.page - 1) * $scope.limit;
        $scope.totalPage = Math.ceil($scope.list.length / $scope.limit);
        $scope.numberOfPage = Array.from(Array($scope.totalPage).keys());
      },
      function (res) {

      }
    );
    $scope.showPage = function (p) {
      $scope.page = p;
      $scope.start = ($scope.page - 1) * $scope.limit;
    };
    $scope.money = 5000;
    $scope.nuoi = function (i) {
      if ($scope.money < 500) {
        alert('Không đủ tiền!');
      } else {
        $scope.money -= 500;
        i.energy += 48;
      }
    }
    $scope.xiec = function (i) {
      if (i.energy < 99) {
        i.energy = 0;
        alert('thăng thiên');
      } else {
        $scope.money += 1400;
        i.energy -= 99;
      }
    }
  })