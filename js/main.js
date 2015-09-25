(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* jshint devel:true */
"use strict";

console.log("Look at app/js/main.js");

var mql = window.matchMedia("@media screen and (min-width: 1200px)");
if (window.matchMedia("(min-width: 1200px)").matches) {
  // the width of browser is more then 1200px
  //onclick activation super-nintendo
  $(".super-nintendo").click(function () {
    var nameClass = "";
    if ($(this).hasClass("super-nintendo")) {
      nameClass = "super-nintendo-open";
      $(this).removeClass("super-nintendo");
    } else {
      nameClass = "super-nintendo";
      $(this).removeClass("super-nintendo-open");
    };
    $(this).addClass(nameClass);
    if ($(this).hasClass("super-nintendo")) {
      $(".playstation").show();
      $(".sega").show();
      $(".nintendo-64").show();
      $(".super-text").css("display", "none");
      $(".out-menu").css("position", "");
    } else {
      $(".playstation").hide();
      $(".sega").hide();
      $(".nintendo-64").hide();
      $(".super-text").css("display", "block");
      $(".out-menu").css("position", "fixed");
    };
  });

  //onclick activetion playstation
  $(".playstation").click(function () {
    var nameClass = "";
    if ($(this).hasClass("playstation")) {
      nameClass = "playstation-open";
      $(this).removeClass("playstation");
    } else {
      nameClass = "playstation";
      $(this).removeClass("playstation-open");
    };
    $(this).addClass(nameClass);
    if ($(this).hasClass("playstation")) {
      $(".super-nintendo").show();
      $(".sega").show();
      $(".nintendo-64").show();
      $(".playstation-text").css("display", "none");
      $(".out-menu").css("position", "");
    } else {
      $(".super-nintendo").hide();
      $(".sega").hide();
      $(".nintendo-64").hide();
      $(".playstation-text").css("display", "block");
      $(".out-menu").css("position", "fixed");
    };
  });

  //onclick activetion sega
  $(".sega").click(function () {
    var nameClass = "";
    if ($(this).hasClass("sega")) {
      nameClass = "sega-open";
      $(this).removeClass("sega");
    } else {
      nameClass = "sega";
      $(this).removeClass("sega-open");
    };
    $(this).addClass(nameClass);
    if ($(this).hasClass("sega")) {
      $(".super-nintendo").show();
      $(".playstation").show();
      $(".nintendo-64").show();
      $(".sega-text").css("display", "none");
      $(".out-menu").css("position", "");
    } else {
      $(".super-nintendo").hide();
      $(".playstation").hide();
      $(".nintendo-64").hide();
      $(".sega-text").css("display", "block");
      $(".out-menu").css("position", "fixed");
    };
  });

  //onclick activetion nintendo-64
  $(".nintendo-64").click(function () {
    var nameClass = "";
    if ($(this).hasClass("nintendo-64")) {
      nameClass = "nintendo-64-open";
      $(this).removeClass("nintendo-64");
    } else {
      nameClass = "nintendo-64";
      $(this).removeClass("nintendo-64-open");
    };
    $(this).addClass(nameClass);
    if ($(this).hasClass("nintendo-64")) {
      $(".super-nintendo").show();
      $(".playstation").show();
      $(".sega").show();
      $(".nintendo-64-text").css("display", "none");
      $(".out-menu").css("position", "");
    } else {
      $(".super-nintendo").hide();
      $(".playstation").hide();
      $(".sega").hide();
      $(".nintendo-64-text").css("display", "block");
      $(".out-menu").css("position", "fixed");
    };
  });

  //menu
  $(".icon").click(function () {
    $(".out-menu").css("transform", "translateX(0px)");
    $(".out-menu").css("width", "50vh");
    $(".out-menu").css("height", "100vh");
    $(".icon-container").hide();
    $(".menu-text").css("display", "block");
  });

  $(".out-menu").mouseleave(function () {
    $(".out-menu").css("transform", "translateX(-500px)");
    $(".out-menu").css("width", "0vh");
    $(".out-menu").css("height", "0vh");
    $(".icon-container").show();
    $(".menu-text").hide();
  });
} else if (window.matchMedia("(min-width: 1100px) and (max-width: 1200px)").matches) {
  // the width of browser is less then 1200px
  //onclick activation super-nintendo
  $(".super-nintendo").click(function () {
    var nameClass = "";
    if ($(this).hasClass("super-nintendo")) {
      nameClass = "super-nintendo-open";
      $(this).removeClass("super-nintendo");
    } else {
      nameClass = "super-nintendo";
      $(this).removeClass("super-nintendo-open");
    };
    $(this).addClass(nameClass);
    if ($(this).hasClass("super-nintendo")) {
      $(".playstation").show();
      $(".sega").show();
      $(".nintendo-64").show();
      $(".super-text").css("display", "none");
      $(".out-menu").css("display", "flex");
    } else {
      $(".playstation").hide();
      $(".sega").hide();
      $(".nintendo-64").hide();
      $(".super-text").css("display", "block");
      $(".out-menu").hide();
    };
  });

  //onclick activetion playstation
  $(".playstation").click(function () {
    var nameClass = "";
    if ($(this).hasClass("playstation")) {
      nameClass = "playstation-open";
      $(this).removeClass("playstation");
    } else {
      nameClass = "playstation";
      $(this).removeClass("playstation-open");
    };
    $(this).addClass(nameClass);
    if ($(this).hasClass("playstation")) {
      $(".super-nintendo").show();
      $(".sega").show();
      $(".nintendo-64").show();
      $(".playstation-text").css("display", "none");
      $(".out-menu").css("display", "flex");
    } else {
      $(".super-nintendo").hide();
      $(".sega").hide();
      $(".nintendo-64").hide();
      $(".playstation-text").css("display", "block");
      $(".out-menu").css("display", "none");
    };
  });

  //onclick activetion sega
  $(".sega").click(function () {
    var nameClass = "";
    if ($(this).hasClass("sega")) {
      nameClass = "sega-open";
      $(this).removeClass("sega");
    } else {
      nameClass = "sega";
      $(this).removeClass("sega-open");
    };
    $(this).addClass(nameClass);
    if ($(this).hasClass("sega")) {
      $(".super-nintendo").show();
      $(".playstation").show();
      $(".nintendo-64").show();
      $(".sega-text").css("display", "none");
      $(".out-menu").css("display", "flex");
    } else {
      $(".super-nintendo").hide();
      $(".playstation").hide();
      $(".nintendo-64").hide();
      $(".sega-text").css("display", "block");
      $(".out-menu").css("display", "none");
    };
  });

  //onclick activetion nintendo-64
  $(".nintendo-64").click(function () {
    var nameClass = "";
    if ($(this).hasClass("nintendo-64")) {
      nameClass = "nintendo-64-open";
      $(this).removeClass("nintendo-64");
    } else {
      nameClass = "nintendo-64";
      $(this).removeClass("nintendo-64-open");
    };
    $(this).addClass(nameClass);
    if ($(this).hasClass("nintendo-64")) {
      $(".super-nintendo").show();
      $(".playstation").show();
      $(".sega").show();
      $(".nintendo-64-text").css("display", "none");
      $(".out-menu").css("display", "flex");
    } else {
      $(".super-nintendo").hide();
      $(".playstation").hide();
      $(".sega").hide();
      $(".nintendo-64-text").css("display", "block");
      $(".out-menu").css("display", "none");
    };
  });
} else if (window.matchMedia("only screen and (max-device-width: 1100px) and (-webkit-min-device-pixel-ratio: 2)").matches) {
  //super
  $(".super-nintendo").click(function () {
    $(".super-text").css("display", "flex");
    $(".arrow").css("display", "flex");
  });

  $(".arrow").click(function () {
    $(".super-text").css("display", "none");
    $(".arrow").css("display", "none");
  });
  //playstation
  $(".playstation").click(function () {
    $(".playstation-text").css("display", "flex");
    $(".arrow-play").css("display", "flex");
  });

  $(".arrow-play").click(function () {
    $(".playstation-text").css("display", "none");
    $(".arrow-play").css("display", "none");
  });
  //sega
  $(".sega").click(function () {
    $(".sega-text").css("display", "flex");
    $(".arrow-sega").css("display", "flex");
  });

  $(".arrow-sega").click(function () {
    $(".sega-text").css("display", "none");
    $(".arrow-sega").css("display", "none");
  });
  //nintendo-64
  $(".nintendo-64").click(function () {
    $(".nintendo-64-text").css("display", "flex");
    $(".arrow-nintendo-64").css("display", "flex");
  });

  $(".arrow-nintendo-64").click(function () {
    $(".nintendo-64-text").css("display", "none");
    $(".arrow-nintendo-64").css("display", "none");
  });

  //arrow menu
  $(".arrow-menu").click(function () {
    $(".out-menu").slideUp(1);
    $(".icon-container").css("display", "flex");
  });

  $(".icon").click(function () {
    $(".out-menu").slideDown(1);
  });
};

},{}]},{},[1]);

//# sourceMappingURL=main.js.map
