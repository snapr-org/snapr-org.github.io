"use strict";angular.module("snaprOrgngApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","hc.marked"]).config(["markedProvider",function(t){t.setOptions({gfm:!0,tables:!0})}]).config(["$routeProvider","$windowProvider",function(t,n){var a=n.$get();t.when("/:locale/main",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/:locale/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/:locale/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl",controllerAs:"contact"}).when("/roadmap",{templateUrl:"views/roadmap.html",controller:"RoadmapCtrl",controllerAs:"roadmap"}).otherwise({redirectTo:"/"+(a.navigator.language||a.navigator.userLanguage||"en-GB")+"/main"})}]),angular.module("snaprOrgngApp").factory("navApi",["$resource",function(t){var n="https://raw.githubusercontent.com/snapr-org/snapr-org.content/master";return t(n,{locale:"@_locale"},{get:{url:n+"/:locale/index.json?"+Math.floor(Date.now())},query:{url:n+"/locales.json?"+Math.floor(Date.now()),isArray:!0}})}]),angular.module("snaprOrgngApp").controller("NavCtrl",["$window","$scope","$location","$routeParams","navApi",function(t,n,a,o,e){var r=a.path().split("/");n.currentRoute=r[2],n.refresh=function(a){e.get({locale:a},function(o){n.navItems=o.nav,n.footer=o.footer,t.document.title=o.title,e.query({},function(t){n.navItems.locales=t,n.locale=t.find(t=>t.locale===a)})})},n.refresh(r[1]||"en-GB"),n.isActive=function(t){return a.path().startsWith(t)}}]),angular.module("snaprOrgngApp").controller("MainCtrl",["$scope","$http","$routeParams","$location",function(t,n,a,o){t.locale=a.locale;var e="https://raw.githubusercontent.com/snapr-org/snapr-org.content/master/en-GB/main.md";n.get(e.replace("en-GB",a.locale)+"?"+Math.floor(Date.now())).then(function(n){t.response=n,t.markdown=n.data},function(a){t.translationMissing=!0,n.get(e).then(function(n){t.response=n,t.markdown=n.data},function(n){t.response=n})})}]),angular.module("snaprOrgngApp").controller("AboutCtrl",["$scope","$http","$routeParams",function(t,n,a){t.locale=a.locale;var o="https://raw.githubusercontent.com/snapr-org/snapr-org.content/master/en-GB/about.md";n.get(o.replace("en-GB",a.locale)+"?"+Math.floor(Date.now())).then(function(n){t.response=n,t.markdown=n.data},function(a){t.translationMissing=!0,n.get(o).then(function(n){t.response=n,t.markdown=n.data},function(n){t.response=n})})}]),angular.module("snaprOrgngApp").controller("ContactCtrl",["$scope","$http","$routeParams",function(t,n,a){t.locale=a.locale;var o="https://raw.githubusercontent.com/snapr-org/snapr-org.content/master/en-GB/contact.md";n.get(o.replace("en-GB",a.locale)+"?"+Math.floor(Date.now())).then(function(n){t.response=n,t.markdown=n.data},function(a){t.translationMissing=!0,n.get(o).then(function(n){t.response=n,t.markdown=n.data},function(n){t.response=n})})}]),angular.module("snaprOrgngApp").controller("RoadmapCtrl",["$scope","$http","$routeParams",function(t,n,a){t.locale=a.locale;var o="https://raw.githubusercontent.com/snapr-org/snapr-org.content/master/en-GB/roadmap.md";n.get(o.replace("en-GB",a.locale)+"?"+Math.floor(Date.now())).then(function(n){t.response=n,t.markdown=n.data},function(a){t.translationMissing=!0,n.get(o).then(function(n){t.response=n,t.markdown=n.data},function(n){t.response=n})})}]),angular.module("snaprOrgngApp").run(["$templateCache",function(t){t.put("views/about.html",'<div class="mc-lg text-right" ng-show="translationMissing"> <a href="https://github.com/snapr-org/snapr-org.content/new/master/?filename={{locale}}/about.md" target="_blank"> <i class="glyphicon glyphicon-edit text-warning"></i> </a> </div> <div class="mc-lg text-right" ng-hide="translationMissing"> <a href="https://github.com/snapr-org/snapr-org.content/edit/master/{{locale}}/about.md" target="_blank"> <i class="glyphicon glyphicon-edit"></i> </a> </div> <div marked="markdown" class="mc-lg" ng-show="markdown"></div>'),t.put("views/contact.html",'<div class="mc-lg text-right" ng-show="translationMissing"> <a href="https://github.com/snapr-org/snapr-org.content/new/master/?filename={{locale}}/contact.md" target="_blank"> <i class="glyphicon glyphicon-edit text-warning"></i> </a> </div> <div class="mc-lg text-right" ng-hide="translationMissing"> <a href="https://github.com/snapr-org/snapr-org.content/edit/master/{{locale}}/contact.md" target="_blank"> <i class="glyphicon glyphicon-edit"></i> </a> </div> <div marked="markdown" class="mc-lg" ng-show="markdown"></div>'),t.put("views/main.html",'<div class="jumbotron"> <img src="images/avatar.47e5105b.png" class="img-rounded"> <h1>Coming Soon!</h1> <p class="lead"> Snapr is a project to bring universal basic income as a crypto currency to everyone. </p> </div> <div class="mc-lg text-right" ng-show="translationMissing"> <a href="https://github.com/snapr-org/snapr-org.content/new/master/?filename={{locale}}/main.md" target="_blank"> <i class="glyphicon glyphicon-edit text-warning"></i> </a> </div> <div class="mc-lg text-right" ng-hide="translationMissing"> <a href="https://github.com/snapr-org/snapr-org.content/edit/master/{{locale}}/main.md" target="_blank"> <i class="glyphicon glyphicon-edit"></i> </a> </div> <div marked="markdown" class="mc-lg" ng-show="markdown"></div>'),t.put("views/roadmap.html",'<div class="mc-lg text-right" ng-show="translationMissing"> <a href="https://github.com/snapr-org/snapr-org.content/new/master/?filename={{locale}}/roadmap.md" target="_blank"> <i class="glyphicon glyphicon-edit text-warning"></i> </a> </div> <div class="mc-lg text-right" ng-hide="translationMissing"> <a href="https://github.com/snapr-org/snapr-org.content/edit/master/{{locale}}/roadmap.md" target="_blank"> <i class="glyphicon glyphicon-edit"></i> </a> </div> <div marked="markdown" class="mc-lg" ng-show="markdown"></div>')}]);