require("component-responsive-frame/child");
var dot = require("./lib/dot");
var $ = require("jquery");

var lookup = {};
for (var i = 0, len = mapData.length; i < len; i++) {
    lookup[mapData[i].id] = mapData[i];
}

var template = dot.compile(require("../_info.html"));

var qsa = s => Array.prototype.slice.call(document.querySelectorAll(s));

qsa(".st-group").forEach(function(group) {
  group.addEventListener("click", function(e) {
    document.querySelector(".note").innerHTML = template(lookup[e.target.parentElement.id]);
    if (document.querySelector(".selected")) document.querySelector(".selected").classList.remove("selected");
    e.target.parentElement.classList.add("selected");
  });
});

// $(".link1").click(function() {
//   $('.whitespace').css('height', '100px');
//   // $('.whitespace-part1').addClass("tall");
// });
//
// $(".link2").click(function() {
//     $('.whitespace-part2').addClass("tall");
// });
//
// $(".link3").click(function() {
//     $('.whitespace-part3').addClass("tall");
// });

function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top - 40;
    // $('.whitespace').css('height', '30px');
    if (window_top > div_top) {
        $('#sticky-element').addClass('sticky');
        // $('.text-hed').addClass('sticky');
        // $('.whitespace').css('height', '30px');
    } else {
        $('#sticky-element').removeClass('sticky');
        // $('.text-hed').removeClass('sticky');
    }
}

$(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});

// $('#sticky-element').on('classChange', function() {
//     $('.whitespace').css('height', '100px');
// });



// $(window).on('scroll', function() {
//   $('.jump-navigation').removeClass('clicked');
// });
//
// $(".jump-navigation").click(function() {
//   $('.jump-navigation').addClass('clicked');
//   console.log("this should work");
// });
