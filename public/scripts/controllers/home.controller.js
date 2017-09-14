angular.module('app')
  .controller('HomeController', ['$http', function($http){
    const self = this;

  $(document).ready(function () {
    // $('#leftStar').fadeIn(1000);
    function leftStarFade(){
      $('#leftStar').delay(2500).animate({opacity:'0'}, 1000);
      $('#leftStar').animate({opacity:'1'}, 1000,leftStarFade);
    }
    function middleStarFade(){
      $('#middleStar').delay(3500).animate({opacity:'0'}, 1000);
      $('#middleStar').animate({opacity:'1'}, 1000,middleStarFade);
    }
    function rightStarFade(){
      $('#rightStar').delay(4000).animate({opacity:'0'}, 1000);
      $('#rightStar').animate({opacity:'1'}, 1000,rightStarFade);
    }
    leftStarFade();
    middleStarFade();
    rightStarFade();

  });


  }]);
