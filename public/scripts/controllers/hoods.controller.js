angular.module('app')
  .controller('HoodsController', ['$http', function($http){
    const self = this;
    console.log("hoods controller");
    self.hoods = [
      {
        name: "shiny gold paisley and turquoise",
        images: ["primeside.png", "primefront.png"],
        hoodImageArrayVar: 0
      },
      {
        name: "Checkered",
        images: ["checkered.png", "checkered2.png"],
        hoodImageArrayVar: 0
      },
      {
        name: "Sharp",
        images: ["sharpfront.png", "sharpside.png"],
        hoodImageArrayVar: 0
      },
      {
        name: "Dapper",
        images: ["dapperleft.png", "dapperright.png"],
        hoodImageArrayVar: 0
      },
      {
        name: "Sporty",
        images: ["slangup.png", "slangdown.png"],
        hoodImageArrayVar: 0
      }
    ];
    self.mouseover = function(idx){
      console.log("mouseover");
      if (self.hoods[idx].hoodImageArrayVar == 1) {
        self.hoods[idx].hoodImageArrayVar = 0;
      }else {
        self.hoods[idx].hoodImageArrayVar = 1;
      }
    }
    self.imageChange = function(idx){
      console.log("click");
      if (self.hoods[idx].hoodImageArrayVar == 1) {
        self.hoods[idx].hoodImageArrayVar = 0;
      }else {
        self.hoods[idx].hoodImageArrayVar = 1;
      }
    }
  }]);
