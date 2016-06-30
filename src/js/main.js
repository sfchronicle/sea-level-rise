require("component-responsive-frame/child");
var dot = require("./lib/dot");
var $ = require("jquery");
var d3 = require('d3');

$(window).resize(function() {
    var Wwidth= $(this).width();
    if (Wwidth <= 480) {
      console.log("phone");
    } else if (Wwidth < 1100) {
      $('.left').css('margin-left',20 +'px');
      $('.intro').css('margin-right',20 +'px');
      $('.right').css('margin-right',20 +'px');
    } else if (Wwidth < 1400) {
      $('.left').css('margin-left','10%');
      $('.intro').css('margin-right','10%');
      $('.right').css('margin-right','10%');
    } else if (Wwidth < 2060) {
      $('.left').css('margin-left','20%');
      $('.intro').css('margin-right','20%');
      $('.right').css('margin-right','20%');
    } else {
      $('.left').css('margin-left','30%');
      $('.intro').css('margin-right','30%');
      $('.right').css('margin-right','30%');
    }
});

// $("my-video-duck").prop('muted', true); //mute
// $("my-video-infobox").prop('muted', true); //mute

// setting up look up tables for mobile and desktop for clickable map
var lookup = {};
for (var i = 0, len = mapData.length; i < len; i++) {
    lookup[mapData[i].slug] = mapData[i];
}
var lookup_mobile = {};
for (var i = 0, len = mapData.length; i < len; i++) {
    lookup_mobile[mapData[i].id] = mapData[i];
}
var lookup_agency = {};
for (var i = 0, len = permitData.length; i < len; i++) {
    lookup_agency[permitData[i].id] = permitData[i];
}

// templates for the two interactives
var template = dot.compile(require("../_info.html"));
var mobile_template = dot.compile(require("../_mobile_info.html"));
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
    var elemIDnum = elemID.split("y")[1]-1;
    document.querySelector(".agency-role").innerHTML = agency_template(lookup_agency[elemIDnum]);
  }, false);
};

// initialize map interactive on mobile
var index = 0;
document.querySelector(".mobile-template").innerHTML = mobile_template(lookup_mobile[index]);

// set up clicking to update map interactive on mobile
document.getElementById("scroll-right").addEventListener("click", function() {
  index = index+1;
  document.querySelector(".mobile-template").innerHTML = mobile_template(lookup_mobile[index]);
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
  document.querySelector(".mobile-template").innerHTML = mobile_template(lookup_mobile[index]);
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

// photo gallery #1
var gallery1_idx = 0;
// set up clicking to update map interactive on mobile
document.getElementById("scroll-right-gallery1").addEventListener("click", function() {
  gallery1_idx = gallery1_idx+1;
  $(".photo_g1").removeClass("active");
  $("#photo_g1"+gallery1_idx).addClass("active");
  if (gallery1_idx == 6) {
    $("#scroll-right-gallery1").addClass("last");
  } else {
    $("#scroll-right-gallery1").removeClass("last");
  };
  if (gallery1_idx == 0) {
    $("#scroll-left-gallery1").addClass("first");
  } else {
    $("#scroll-left-gallery1").removeClass("first");
  };
});
document.getElementById("scroll-left-gallery1").addEventListener("click", function() {
  gallery1_idx = gallery1_idx-1;
  $(".photo_g1").removeClass("active");
  $("#photo_g1"+gallery1_idx).addClass("active");
  if (gallery1_idx == 6) {
    $("#scroll-right-gallery1").addClass("last");
  } else {
    $("#scroll-right-gallery1").removeClass("last");
  };
  if (gallery1_idx == 0) {
    $("#scroll-left-gallery1").addClass("first");
  } else {
    $("#scroll-left-gallery1").removeClass("first");
  };
});


// photo gallery #2
var gallery2_idx = 0;
// set up clicking to update map interactive on mobile
document.getElementById("scroll-right-gallery2").addEventListener("click", function() {
  gallery2_idx = gallery2_idx+1;
  $(".photo_g2").removeClass("active");
  $("#photo_g2"+gallery2_idx).addClass("active");
  if (gallery2_idx == 2) {
    $("#scroll-right-gallery2").addClass("last");
  } else {
    $("#scroll-right-gallery2").removeClass("last");
  };
  if (gallery2_idx == 0) {
    $("#scroll-left-gallery2").addClass("first");
  } else {
    $("#scroll-left-gallery2").removeClass("first");
  };
});
document.getElementById("scroll-left-gallery2").addEventListener("click", function() {
  gallery2_idx = gallery2_idx-1;
  $(".photo_g2").removeClass("active");
  $("#photo_g2"+gallery2_idx).addClass("active");
  if (gallery2_idx == 2) {
    $("#scroll-right-gallery2").addClass("last");
  } else {
    $("#scroll-right-gallery2").removeClass("last");
  };
  if (gallery2_idx == 0) {
    $("#scroll-left-gallery2").addClass("first");
  } else {
    $("#scroll-left-gallery2").removeClass("first");
  };
});

// photo gallery #3
var gallery3_idx = 0;
// set up clicking to update map interactive on mobile
document.getElementById("scroll-right-gallery3").addEventListener("click", function() {
  gallery3_idx = gallery3_idx+1;
  $(".photo_g3").removeClass("active");
  $("#photo_g3"+gallery3_idx).addClass("active");
  if (gallery3_idx == 2) {
    $("#scroll-right-gallery3").addClass("last");
  } else {
    $("#scroll-right-gallery3").removeClass("last");
  };
  if (gallery3_idx == 0) {
    $("#scroll-left-gallery3").addClass("first");
  } else {
    $("#scroll-left-gallery3").removeClass("first");
  };
});
document.getElementById("scroll-left-gallery3").addEventListener("click", function() {
  gallery3_idx = gallery3_idx-1;
  $(".photo_g3").removeClass("active");
  $("#photo_g3"+gallery3_idx).addClass("active");
  if (gallery3_idx == 2) {
    $("#scroll-right-gallery3").addClass("last");
  } else {
    $("#scroll-right-gallery3").removeClass("last");
  };
  if (gallery3_idx == 0) {
    $("#scroll-left-gallery3").addClass("first");
  } else {
    $("#scroll-left-gallery3").removeClass("first");
  };
});

// clicking for desktop map interactive
// var qsa = s => Array.prototype.slice.call(document.querySelectorAll(s));
// qsa(".st-group").forEach(function(group) {
//   group.addEventListener("click", function(e) {
//     console.log("we are here and it might be good");
//     document.querySelector(".note").innerHTML = template(lookup[e.target.parentElement.id]);
//     if (document.querySelector(".selected")) document.querySelector(".selected").classList.remove("selected");
//     e.target.parentElement.classList.add("selected");
//   });
// });

// clicking for desktop map interactive
var qsa = s => Array.prototype.slice.call(document.querySelectorAll(s));
qsa(".map-group").forEach(function(group) {
  group.addEventListener("click", function(e) {
    document.querySelector(".note").innerHTML = template(lookup[this.title]);
    if (document.querySelector(".selected")) document.querySelector(".selected").classList.remove("selected");
    e.target.parentElement.classList.add("selected");
  });
});

// sizes for peeps-interactive
if (screen.width > 768) {
  var peep_width = 70;
} else if (screen.width <= 768 && screen.width > 480) {
  var peep_width = 60;
} else if (screen.width <= 480) {
  var peep_width = 50;
}

var toggle = 1;
// // sticky navigation controls
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
    if ((window_top > $('#peeps-interactive').offset().top-400) & toggle) {
      for (var i=1; i<12; i++) {
        if (i==1) {
          $('#agency'+i).animate({opacity:1.0},i*200);
        } else {
          $('#agency'+i).animate({opacity:0.6},i*200);
        }
      }
      toggle = 0;
    }
}

$(".agency").click(function() {
  for (var i=1; i<12; i++) {
      $('#agency'+i).animate({opacity:0.6},i*50);
  }
  $(this).animate({opacity:1.0},50);
});

$(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});

$(".anchor").click(function(event) {
  $('body').animate( { scrollTop:$(this.hash).offset().top} , 1000);
} );


var $elem = $('#infobox .item'), l = $elem.length, i = 0;
function go() {
    $elem.eq(i % l).fadeIn(4000, function() {
        $elem.eq(i % l).fadeOut(4000, go);
        i++;
    })
}

go();

// scrolling map for embarcadero section

var mapHeight = 1200 + 40; //size of map + 40 pixels of padding
var textHeight = 0;
var inc = mapHeight/8; //how often we should see new map element
embarcaderoData.forEach(function(pier,index) {
  var pier_str = ".pier"+index;
  $(pier_str).text(pier.text);
  textHeight = textHeight + $(pier_str).height()+40; // each block has 40px padding
});
textHeight = textHeight-20; // every block has 40px of padding except the bottom

var top_padding = Math.floor((mapHeight-textHeight)/7);
console.log(top_padding);
if (top_padding < 0) {
  console.log("ERROR ERROR ERROR");
  top_padding = 0;
}
embarcaderoData.forEach(function(pier,index) {
  if (index > 0) {
    var pier_str = ".pier"+index;
    $(pier_str).css('padding-top',top_padding);
  }
});

$(window).scroll(function(){
    var pos = $(this).scrollTop();
    var embarcadero_pos = $('#sticky-map-top').offset().top-200;
    if(pos < embarcadero_pos) {
        $('.pier0').css('color','black');
    }
    if(pos > embarcadero_pos) {
      $(".pier-info").css('color','#B2B2B2');
      var idx = Math.round((pos-embarcadero_pos)/inc);
      var pier_active = ".pier"+idx;
      $(pier_active).css('color','black');
    }
});

// $(window).scroll(function(){
//     var pos = $(this).scrollTop();
//     var embarcadero_pos = $('#sticky-map-top').offset().top-300;
//     if(pos < embarcadero_pos) {
//         $('.pier-info').slideUp().text(embarcaderoData[0].text);
//     }
//     if(pos >= embarcadero_pos) {
//         $('.pier-info').slideDown();
//     }
//     // console.log(embarcaderoData);
//     if(pos > embarcadero_pos) {
//       // console.log(embarcaderoData[0].text);
//       var mapHeight = 1200; //size of map
//       var inc = mapHeight/8; //how often we should see new map element
//       console.log(pos-embarcadero_pos);
//       var idx = Math.round((pos-embarcadero_pos)/inc);
//       console.log("this is the index");
//       console.log(idx);
//       var top_padding = (idx*inc+20)+"px";
//       console.log(top_padding);
//       $('.pier-info').text(embarcaderoData[idx].text);
//       $('.pier-info').css('padding-top',top_padding);
//     }
// });

// code for timeline

var xScale = d3.scaleLinear()
  .domain([1863,2016])
  .range([0,645]);

var xAxisGroup = d3.select(".timeline")
  .append("svg")
    .attr("width",800)
    .attr("height",500)
  .call(d3.axisBottom(xScale).tickValues([1863,2016]))
  .data(timelineData)
  .append("g")
  .enter().append("circle") 
    .attr("cx", function(d) {
      console.log(d);
      console.log(d.year);
      return d.year - 1863;
    })
    .attr("cy", 5)
    .attr("r", 5);