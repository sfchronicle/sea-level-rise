require("component-responsive-frame/child");
var dot = require("./lib/dot");
var $ = require("jquery");

// setting up look up tables for mobile and desktop for clickable map
var lookup = {};
for (var i = 0, len = mapData.length; i < len; i++) {
    lookup[mapData[i].id] = mapData[i];
}
var lookup_mobile = {};
for (var i = 0, len = mapDataMobile.length; i < len; i++) {
    lookup_mobile[mapDataMobile[i].id] = mapDataMobile[i];
}
var lookup_agency = {};
for (var i = 0, len = permitData.length; i < len; i++) {
    lookup_agency[permitData[i].id] = permitData[i];
}

// templates for the two interactives
var template = dot.compile(require("../_info.html"));
var agency_template = dot.compile(require("../_agency_info.html"));

// initialize agency interactive
document.querySelector(".agency-role").innerHTML = agency_template(lookup_agency[0]);

// agency interactive controls
document.getElementById("agency1").addEventListener("click", function() {
  document.querySelector(".agency-role").innerHTML = agency_template(lookup_agency[0]);
  $("#agency1").addClass("active");
});

var agencyList = document.getElementsByClassName("agency");
for (var i=0; i<agencyList.length; i+=1) {
  agencyList[i].addEventListener("click",function(){
    $(".agency").removeClass("active");
    var elemID = this.id;
    $('#'+elemID).addClass("active");
    var elemIDnum = elemID.slice(-1);
    document.querySelector(".agency-role").innerHTML = agency_template(lookup_agency[elemIDnum]);
  }, false);
};

// initialize map interactive on mobile
var index = 0;
document.querySelector(".mobile-template").innerHTML = template(lookup_mobile[index]);

// set up clicking to update map interactive on mobile
document.getElementById("scroll-right").addEventListener("click", function() {
  index = index+1;
  document.querySelector(".mobile-template").innerHTML = template(lookup_mobile[index]);
  if (index == 5) {
    $("#scroll-right").addClass("last");
  } else {
    $("#scroll-right").removeClass("last");
  };
  if (index == 0) {
    $("#scroll-left").addClass("first");
  } else {
    $("#scroll-left").removeClass("first");
  };
});

document.getElementById("scroll-left").addEventListener("click", function() {
  index = index-1;
  document.querySelector(".mobile-template").innerHTML = template(lookup_mobile[index]);
  if (index == 0) {
    $("#scroll-left").addClass("first");
  } else {
    $("#scroll-left").removeClass("first");
  };
  if (index == 5) {
    $("#scroll-right").addClass("last");
  } else {
    $("#scroll-right").removeClass("last");
  };
});

// clicking for desktop map interactive
var qsa = s => Array.prototype.slice.call(document.querySelectorAll(s));
qsa(".st-group").forEach(function(group) {
  group.addEventListener("click", function(e) {
    document.querySelector(".note").innerHTML = template(lookup[e.target.parentElement.id]);
    console.log(e.target.parentElement.id);
    if (document.querySelector(".selected")) document.querySelector(".selected").classList.remove("selected");
    e.target.parentElement.classList.add("selected");
    console.log(e.target.parentElement);
  });
});

// sticky navigation controls
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
   $('body').animate( { scrollTop:$(this.hash).offset().top} , 1000);
} );
