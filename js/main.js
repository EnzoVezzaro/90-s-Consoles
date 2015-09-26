(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* jshint devel:true */
"use strict";

console.log("Look at app/js/main.js");

var mql = window.matchMedia("@media screen and (min-width: 1200px)");
if ((window.matchMedia("(min-width: 1200px)").matches)){
  $(".icon").click(function () {
    $(".out-menu").css("transform", "translateX(0px)");
    $(".out-menu").css("width", "50vw");
    $(".out-menu").css("height", "100vh");
    $(".icon-container").show();
    $(".menu-text").show();
  });

  $(".out-menu").mouseleave(function () {
    $(".out-menu").css("transform", "translateX(-500px)");
    $(".out-menu").css("width", "0vh");
    $(".out-menu").css("height", "0vh");
    $(".icon-container").show();
    $(".menu-text").hide();
  });
};

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
    $(".out-menu").show();
  } else {
    $(".playstation").hide();
    $(".sega").hide();
    $(".nintendo-64").hide();
    $(".super-text").css("display", "block");
    $(".out-menu").css("display", "none");
    if ((window.matchMedia("(max-width: 800px)").matches)){
    $('.arrow').show();} else {$('.arrow').hide();};
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
    $(".out-menu").show();
  } else {
    $(".super-nintendo").hide();
    $(".sega").hide();
    $(".nintendo-64").hide();
    $(".playstation-text").css("display", "block");
    $(".out-menu").css("display", "none");
    if ((window.matchMedia("(max-width: 800px)").matches)){
      $('.arrow-play').show();
    } else {
      $('.arrow-play').hide();
    };
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
    $(".out-menu").show();
  } else {
    $(".super-nintendo").hide();
    $(".playstation").hide();
    $(".nintendo-64").hide();
    $(".sega-text").css("display", "block");
    $(".out-menu").css("display", "none");
    if ((window.matchMedia("(max-width: 800px)").matches)){
    $('.arrow-sega').show();
    } else {
      $('.arrow-sega').hide();
    };
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
    $(".out-menu").show();
  } else {
    $(".super-nintendo").hide();
    $(".playstation").hide();
    $(".sega").hide();
    $(".nintendo-64-text").css("display", "block");
    $(".out-menu").css("display", "none");
    if ((window.matchMedia("(max-width: 800px)").matches)){
    $('.arrow-nintendo-64').show();} else {$('.arrow-nintendo-64').hide();};
  };
});

//arrow nintendo
$('.arrow').click(function(){
  $('#super-nintendo').removeClass('super-nintendo-open');
  $('#super-nintendo').addClass('super-nintendo');
  $('.super-nintendo').show();
  $(".playstation").show();
  $(".sega").show();
  $(".nintendo-64").show();
  $(".super-text").css("display", "none");
  $('.arrow').hide();
});
//arrow play
$('.arrow-play').click(function(){
  $('#playstation').removeClass('playstation-open');
  $('#playstation').addClass('playstation');
  $('.super-nintendo').show();
  $('.playstation').show();
  $('.sega').show();
  $('.nintendo-64').show();
  $('.playstation-text').css("display", "none");
  $('.arrow-play').hide();
});
//arrow sega
$('.arrow-sega').click(function(){
  $('#sega').removeClass('sega-open');
  $('#sega').addClass('sega');
  $('.super-nintendo').show();
  $(".playstation").show();
  $(".sega").show();
  $(".nintendo-64").show();
  $(".sega-text").css("display", "none");
  $('.arrow-sega').hide();
});
//arrow nintendo-64
$('.arrow-nintendo-64').click(function(){
  $('#nintendo-64').removeClass('nintendo-64-open');
  $('#nintendo-64').addClass('nintendo-64');
  $('.super-nintendo').show();
  $(".playstation").show();
  $(".sega").show();
  $(".nintendo-64").show();
  $(".nintendo-64-text").css("display", "none");
  $('.arrow-nintendo-64').hide();
});

//menu
$(".icon").click(function() {
  $('.out-menu').slideDown(1);
});

$('.arrow-menu').click(function(){
  $('.out-menu').slideUp(1);
});

},{}]},{},[1]);

//# sourceMappingURL=main.js.map
