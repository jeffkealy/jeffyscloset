angular.module('app')
  .controller('HomeController', ['$http', function($http){
    const self = this;

  self.homeImage = "coat.png";

  $(document).ready(function(){
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

  self.toolbarData = [
    {
      title: "Pants",
      image: "pants.png"
    },
    {
      title: "Thrift",
      image: "thrift.png"

    },
    {
      title: "Hoods",
      image: "hoodie.png"
    }
  ];
  self.toolbarClick = function(){
    alert("under construction")
  }
  self.mouseover = function(idx){
    self.homeImage = self.toolbarData[idx].image
  }

  self.mouseleave = function(){
    self.homeImage = "coatonly.png"
  }

  }]);
