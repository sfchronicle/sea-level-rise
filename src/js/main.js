require("component-responsive-frame/child");
var dot = require("./lib/dot");
var $ = require("jquery");
var d3 = require('d3');

$(window).resize(function() {
    var Wwidth= $(this).width();
    if (Wwidth <= 480) {
//      console.log("phone");
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
var slideshow_template = dot.compile(require("../_slideshow.html"));

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
  $("#part1_link").removeClass("active");
  $("#part2_link").removeClass("active");
  $("#resources_link").removeClass("active");
  $("#part1").addClass("hide");
  $("#part2").addClass("hide");
  $("#resources").addClass("hide");
  $(this.hash).removeClass("hide");
  $('body').scrollTop($(this.hash));
  var link_id = this.hash+"_link";
  $(link_id).addClass("active");
} );

$(document).ready(function () {
  $("#part1_link").removeClass("active");
  $("#part2_link").removeClass("active");
  $("#resources_link").removeClass("active");
  var hash = window.location.hash;
  if (hash == "#part1") {
    $("#part1_link").addClass("active");
    $("#part2").addClass("hide");
    $("#resources").addClass("hide");
    // $(window).scrollTop($("#part1"));
    $('html, body').animate({scrollTop:$('#part1').position().top}, 'fast');
  } else if (hash == "#part2") {
    $("#part2_link").addClass("active");
    $("#part1").addClass("hide");
    $("#resources").addClass("hide");
    // $(window).scrollTop($("#part2"));
    $('html, body').animate({scrollTop:$('#part2').position().top}, 'fast');
  } else if (hash == "#resources"){
    $("#resources_link").addClass("active");
    $("#part1").addClass("hide");
    $("#part2").addClass("hide");
    // $(window).scrollTop($("#part3"));
    $('html, body').animate({scrollTop:$('#resources').position().top}, 'fast');
  } else {
    $("#part2").addClass("hide");
    $("#resources").addClass("hide");
    $('html, body').animate({scrollTop:$('#part1').position().top}, 'fast');
  }
});

var $elem = $('#infobox .item'), l = $elem.length, i = 0;
function go() {
    $elem.eq(i % l).fadeIn(4000, function() {
        $elem.eq(i % l).fadeOut(4000, go);
        i++;
    })
}

go();


timelineData.forEach(function(d,i) {
  var date_lookup = ".date"+i;
  $(date_lookup).append("<span class='event-anchor' id='" + d.top_id + "'></span>");
  $(date_lookup).append("<div class='event'></div>");
  $(date_lookup).append("<div id='" + d.bottom_id + "'></div>");

  $(date_lookup + " .event").append("<div class='date' id='" + d.year_id + "'>" + d.year + "</div>");
  $(date_lookup + " .event").append("<div class='event-info'>" + d.text + "<br></div>");
  $(date_lookup + " .event-info").append("<img class='event-img' src='./assets/photos/embarcadero/timeline/" + d.year + ".jpg'>");
  $(date_lookup + " .event-info").append("<div class='caption'>" + d.caption + "<span class='credit'>" + d.credit + "</span></div>");
});


// scrolling map for embarcadero section

if (screen.width > 900) {
  // $("#Layer_1").css('margin-left',"5%");
} else if (screen.width > 1000) {
  $("#Layer_1").css('margin-left',"20%");
} else if (screen.width > 1100) {
  $("#Layer_1").css('margin-left',"25%");
}

if (screen.width > 480) {
  var mapHeight = 1200 + 40; //size of map + 40 pixels of padding
  var textHeight = 0;
  var inc = mapHeight/8; //how often we should see new map element
  embarcaderoData.forEach(function(pier,index) {
    var pier_str = ".pier"+index;
    $(pier_str).html("<span class='loc'>" + pier.location+ "</span>" +":  "+pier.text);
    $(pier_str).attr('id',pier.locationID);
    textHeight = textHeight + $(pier_str).height()+40; // each block has 40px padding
  });
  textHeight = textHeight-20; // every block has 40px of padding except the bottom

  var top_padding = Math.floor((mapHeight-textHeight)/7);
//  console.log(top_padding);
  if (top_padding < 0) {
//    console.log("ERROR ERROR ERROR");
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
          $('.st').css('fill','#F2F2F2');
          $('.st0').css('fill','red');
      }
      if(pos > embarcadero_pos) {
        $(".pier-info").css('color','#B2B2B2');
        $('.st').css('fill','#F2F2F2');
        var idx = Math.round((pos-embarcadero_pos)/inc);
        var pier_active = ".pier"+idx;
        var pier_path_active = ".st"+idx;
        $(pier_active).css('color','black');
        $(pier_path_active).css('fill', 'red');
      }
  });
} else {
    $(window).scroll(function(){
      $(".pier-info-mobile").attr("display","block");
      var pos = $(this).scrollTop();
      var embarcadero_pos = $('#sticky-map-top').offset().top-100;
      var mapHeight = $("#mobile-map-embarcadero").height();
      // console.log(mapHeight);//900; //size of map
      var inc_list = [142, 291, 465, 565, 660, 797, 913, 973, 1203];
      var inc = mapHeight/8; //how often we should see new map elementf
      if(pos >= embarcadero_pos) {
          $('.pier-info-mobile').css("display","none");
      }
      if(pos > embarcadero_pos) {
        $('.pier-info-mobile').css("display","block");
        var idx = Math.round((pos-embarcadero_pos)/inc);
        if (idx < 8 && idx >= 0) {
          var inc_new = Math.round(inc_list[idx]/1203*mapHeight)+15;
          // var top_padding = (idx*inc+10)+"px";
          var top_padding = inc_new+"px";
          $('.pier-info-mobile').html("<span class='loc'>" + embarcaderoData[idx].location+ "</span>"+ ": "+embarcaderoData[idx].text);
          $('.pier-info-mobile').css('margin-top',top_padding);
        }
      }
    });
}

// code for timeline

var xScale = d3.scaleLinear()
  .domain([1863,2016])
  .range([0,645]);

// setting dimensions for the svg
if (screen.width > 900) {
  var width = 820;
  var margin = {
    top: -10,
    right: 40,
    bottom: 35,
    left: 40
  };
} else if (screen.width <= 900 && screen.width > 600) {
  var width = 500;
  var margin = {
    top: -10,
    right: 40,
    bottom: 35,
    left: 40
  };
} else if (screen.width <= 600 && screen.width > 480) {
  var width = 430;
  var margin = {
    top: -10,
    right: 25,
    bottom: 35,
    left: 25
  };
} else if (screen.width <= 480 && screen.width > 370) {
    var width = 320;
    var margin = {
      top: -10,
      right: 25,
      bottom: 25,
      left: 25
    };
} else if (screen.width <= 370) {
  var width = 280;
  var margin = {
    top: -10,
    right: 20,
    bottom: 25,
    left: 20
  };
}

var height = 50;

var xAxisGroup = d3.select(".timeline").append("svg")
    .attr("width",width + margin.left + margin.right)
    .attr("height",height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// x-axis scale
var x = d3.scaleLinear()
    .rangeRound([0,width]);

var x2 = d3.scaleLinear()
    .rangeRound([0,width]);

x.domain(d3.extent(timelineData, function(d) {
  return d.year;
}));

x2.domain(d3.extent(timelineData, function(d) {
  return d.year;
}));

var xAxis2 = d3.axisBottom()
  .scale(x2)
  .tickFormat(d3.format(".0f"))
  .tickValues(["1863","1876","1898","1916","1936","1959","1969","1978","1989","1990","2000","2013","2014","2016"]
  )
  .tickSize(0)
  .tickPadding(15);

var xAxis = d3.axisTop()
  .scale(x)
  .tickFormat(d3.format(".0f"))
  .tickValues(["1863","1876","1898","1916","1936","1959","1969","1978","1989","1990","2000","2013","2014","2016"]
  )
  .tickSize(0)
  .tickPadding(15);

xAxisGroup.append("g")
    .attr("class", "axisbottom")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

xAxisGroup.append("g")
    .attr("class", "axistop")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis2);

var axistop = xAxisGroup.selectAll(".axistop");

var ticks = axistop.selectAll(".tick")

if (screen.width > 480) {
  ticks.style("cursor", "pointer")
    .on("click", function(d){
         $('html, body').animate({
                    scrollTop: $("#year-" + d ).offset().top
                }, 1000);
    });
}

ticks.selectAll("line").remove();
ticks.each(function() {
  d3.select(this)
    .append("circle")
      .attr("r", 5)
      .attr("fill","white")
      .style("stroke","rgb(178, 178, 178)")
      .style("stroke-width","1px");
  d3.selectAll("circle")
    .attr("id", function(d,i) {return "tick" + i})
  d3.selectAll("text")
    .attr("id", function(d,i) {return "year" + i})
});

// sticky timeline

function stick_here() {
  var window_top = $(window).scrollTop();
  if (screen.width > 480) {
    var div_top = $('#stick-here').offset().top - 38; // account for sticky header height
  }
  else {
    var div_top = $('#stick-here').offset().top;
  }
  var div_bottom = $('#timeline-bottom').offset().top - 150; // used to be 120
  if (window_top > div_top && window_top < div_bottom) {
      $('#timeline').addClass('sticky');
      $('#timeline-placeholder').css({display: 'block'}) // puts in a placeholder for where sticky used to be for smooth scrolling
  } else {
      $('#timeline').removeClass('sticky');
      $('#timeline-placeholder').css({display: 'none'}); // removes placeholder
  }
}
$(function() {
    $(window).scroll(stick_here);
    stick_here();
});

function activate() {
  var eventdates = ["#year-1863","#year-1876","#year-1898","#year-1916","#year-1936","#year-1959","#year-1969","#year-1978",
      "#year-1989","#year-1990","#year-2000","#year-2013","#year-2014","#year-2016"];
  var eventdatesend = ["#year-1863-end","#year-1876-end","#year-1898-end","#year-1916-end","#year-1936-end","#year-1959-end",
      "#year-1969-end","#year-1978-end","#year-1989-end","#year-1990-end","#year-2000-end","#year-2013-end","#year-2014-end",
      "#year-2016-end"];
  var years = ["#year0", "#year1", "#year2","#year3","#year4","#year5","#year6","#year7","#year8","#year9","#year10","#year11",
      "#year12","#year13"]; // x-axis text values
  var yearids = ["#year-0", "#year-1", "#year-2","#year-3","#year-4","#year-5","#year-6","#year-7","#year-8","#year-9",
      "#year-10","#year-11","#year-12","#year-13"]; // dates in the timeline
  var tickgroup = ["#tick0","#tick1","#tick2","#tick3","#tick4","#tick5","#tick6","#tick7","#tick8","#tick9","#tick10",
      "#tick11","#tick12","#tick13"]; // circles on axis
  var eventdates_top = [];
  var eventdatesend_top = [];

  if (screen.width > 480) {
    var window_top = $(window).scrollTop() + 113 + 1;
  }
  else {
    var window_top = $(window).scrollTop() + 65 + 1;
  }

  for(var i = 0; i < eventdates.length; i++) {
    if (screen.width > 480) {
      eventdates_top.push($(eventdates[i]).offset().top + 113 - 1);
    }
    else {
      eventdates_top.push($(eventdates[i]).offset().top + 65 - 1);
    }

    eventdatesend_top.push($(eventdatesend[i]).offset().top);

    if (window_top > eventdates_top[i] && window_top < eventdatesend_top[i]) {
        $(tickgroup[i]).addClass('active');
        $(years[i]).addClass('active');
        $(yearids[i]).addClass('activedate');
    } else {
        $(tickgroup[i]).removeClass('active');
        $(years[i]).removeClass('active');
        $(yearids[i]).removeClass('activedate');
    }

    // removes years if there is an overlap
    if ($(years[11]).hasClass('active') || $(years[12]).hasClass('active') || ($(years[10]).hasClass('active') && screen.width <= 350)) {
      $(years[13]).css({display: 'none'});
    }
    else {
      $(years[13]).css({display: ''});
    }

    if (screen.width <= 480) {
      if($(years[1]).hasClass('active')) {
        $(years[0]).css({display: 'none'});
      }
      else {
        $(years[0]).css({display: ''});
      }
    }

  }
}

$(function() {
    $(window).scroll(activate);
    activate();
});



// initialize photo gallery #4 in part 2
var photo1 = {
  url: "./assets/photos/embarcadero/sfwaterfront0710_PH2.jpg",
  caption: "People fill the sidewalk outside the Pier 23 restaurant and bar on the Embarcadero. ",
  credit: "Michael Macor"
};
var photo2 = {
  url: "./assets/photos/embarcadero/sfwaterfront0710_PH3.jpg",
  caption: "The seawall along the Embarcadero is covered in algae and could fail in a major earthquake. ",
  credit: "Michael Macor"
};
var photo3 = {
  url: "./assets/photos/embarcadero/sfwaterfront0710_PH4.jpg",
  caption: "People passing by at Pier 26 along the Embarcadero. ",
  credit: "Michael Macor"
};
document.querySelector("#photo_g40").innerHTML = slideshow_template(photo1);
document.querySelector("#photo_g41").innerHTML = slideshow_template(photo2);
document.querySelector("#photo_g42").innerHTML = slideshow_template(photo3);

// photo gallery #4
var gallery4_idx = 0;
// set up clicking to update map interactive on mobile
document.getElementById("scroll-right-gallery4").addEventListener("click", function() {
  gallery4_idx = gallery4_idx+1;
  $(".photo_g4").removeClass("active");
  $("#photo_g4"+gallery4_idx).addClass("active");
  if (gallery4_idx == 2) {
    $("#scroll-right-gallery4").addClass("last");
  } else {
    $("#scroll-right-gallery4").removeClass("last");
  };
  if (gallery4_idx == 0) {
    $("#scroll-left-gallery4").addClass("first");
  } else {
    $("#scroll-left-gallery4").removeClass("first");
  };
});
document.getElementById("scroll-left-gallery4").addEventListener("click", function() {
  gallery4_idx = gallery4_idx-1;
  $(".photo_g4").removeClass("active");
  $("#photo_g4"+gallery4_idx).addClass("active");
  if (gallery4_idx == 2) {
    $("#scroll-right-gallery4").addClass("last");
  } else {
    $("#scroll-right-gallery4").removeClass("last");
  };
  if (gallery4_idx == 0) {
    $("#scroll-left-gallery4").addClass("first");
  } else {
    $("#scroll-left-gallery4").removeClass("first");
  };
});

// initialize photo gallery #5 in part 2
var photo4 = {
  url: "./assets/photos/embarcadero/sfwaterfront0710_PH12.jpg",
  caption: "Chris Stricklen waits for a ferry on the bay side of the Ferry Building on the Embarcadero at the foot of Market Street. ",
  credit: "Michael Macor"
};
var photo5 = {
  url: "./assets/photos/embarcadero/sfwaterfront0710_PH13.jpg",
  caption: "Mishant Chandra (left) and David Fromstein order drinks at Red's Java House at Pier 30 on the Embarcadero. ",
  credit: "Michael Macor"
};
var photo6 = {
  url: "./assets/photos/embarcadero/sfwaterfront0710_PH14.jpg",
  caption: "Visitors enjoy the shady side of the Ferry Building. ",
  credit: "Michael Macor"
};
var photo7 = {
  url: "./assets/photos/embarcadero/sfwaterfront0710_PH15.jpg",
  caption: "Patrons enjoy lunch on the water side of the Ferry Building, which reopened as a market hall in 2003. ",
  credit: "Michael Macor"
};
var photo8 = {
  url: "./assets/photos/embarcadero/sfwaterfront0710_PH16.jpg",
  caption: "Red's Java House, which opened as Franco’s, a lunch spot for longshoremen, in the 1930s and was renamed Red’s in 1955. It’s one of the last remnants of the working waterfront. ",
  credit: "Michael Macor"
};
document.querySelector("#photo_g50").innerHTML = slideshow_template(photo4);
document.querySelector("#photo_g51").innerHTML = slideshow_template(photo5);
document.querySelector("#photo_g52").innerHTML = slideshow_template(photo6);
document.querySelector("#photo_g53").innerHTML = slideshow_template(photo7);
document.querySelector("#photo_g54").innerHTML = slideshow_template(photo8);

// photo gallery #4
var gallery5_idx = 0;
// set up clicking to update map interactive on mobile
document.getElementById("scroll-right-gallery5").addEventListener("click", function() {
  gallery5_idx = gallery5_idx+1;
  $(".photo_g5").removeClass("active");
  $("#photo_g5"+gallery5_idx).addClass("active");
  if (gallery5_idx == 4) {
    $("#scroll-right-gallery5").addClass("last");
  } else {
    $("#scroll-right-gallery5").removeClass("last");
  };
  if (gallery5_idx == 0) {
    $("#scroll-left-gallery5").addClass("first");
  } else {
    $("#scroll-left-gallery5").removeClass("first");
  };
});
document.getElementById("scroll-left-gallery5").addEventListener("click", function() {
  gallery5_idx = gallery5_idx-1;
  $(".photo_g5").removeClass("active");
  $("#photo_g5"+gallery5_idx).addClass("active");
  if (gallery5_idx == 4) {
    $("#scroll-right-gallery5").addClass("last");
  } else {
    $("#scroll-right-gallery5").removeClass("last");
  };
  if (gallery5_idx == 0) {
    $("#scroll-left-gallery5").addClass("first");
  } else {
    $("#scroll-left-gallery5").removeClass("first");
  };
});

(function() {
  if (window.__twitterIntentHandler) return;
  var intentRegex = /twitter\.com\/intent\/(\w+)/,
      windowOptions = 'scrollbars=yes,resizable=yes,toolbar=no,location=yes',
      width = 550,
      height = 420,
      winHeight = screen.height,
      winWidth = screen.width;

  function handleIntent(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        m, left, top;

    while (target && target.nodeName.toLowerCase() !== 'a') {
      target = target.parentNode;
    }

    if (target && target.nodeName.toLowerCase() === 'a' && target.href) {
      m = target.href.match(intentRegex);
      if (m) {
        left = Math.round((winWidth / 2) - (width / 2));
        top = 0;

        if (winHeight > height) {
          top = Math.round((winHeight / 2) - (height / 2));
        }

        window.open(target.href, 'intent', windowOptions + ',width=' + width +
                                           ',height=' + height + ',left=' + left + ',top=' + top);
        e.returnValue = false;
        e.preventDefault && e.preventDefault();
      }
    }
  }

  if (document.addEventListener) {
    document.addEventListener('click', handleIntent, false);
  } else if (document.attachEvent) {
    document.attachEvent('onclick', handleIntent);
  }
  window.__twitterIntentHandler = true;
}());
