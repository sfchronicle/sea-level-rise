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

function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top - 40;
    if (window_top > div_top) {
        $('#sticky-element').addClass('sticky');
        $('.menu-navigation').addClass('sticky');
    } else {
        $('#sticky-element').removeClass('sticky');
        $('.menu-navigation').removeClass('sticky');
    }
}

$(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});

$(".anchor").click(function(event) {
  //  event.preventDefault();
  //  $('body').animate( { scrollTop:$(this.hash).offset().top - 50} , 1000);
   $('body').animate( { scrollTop:$(this.hash).offset().top} , 1000);
} );
