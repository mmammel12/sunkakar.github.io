// let about = "#00FF00",work = "#FF0000"

// var initHeader = $('#header').offset().top

// $(window).on("scroll touchmove", function() {
//     var header = $('#header')
//     scroll = $(window).scrollTop()

//     if (scroll >= initHeader){
//         header.removeClass('sticky');
//         header.addClass('fixed');
//     } else {
//         header.removeClass('fixed');
//         header.addClass('sticky');
//         $('#header').css('background-color', "#FFF") 
//     }
  
//     if (scroll >= $("#welcome").position().top) {
//        $('#header').css('background-color', welcome)
//      } 
//     if (scroll > $("#header-list").position().top) {
//       $('#header').css('background-color', about)
//     } 
// });

$(document).ready(function(){

  $("#about-tab").click(function(){alert("about-tab");})

  $("#resume-tab").click(function(){alert("resume-tab");})

  $("#linkedin-tab").click(function(){alert("linkedin-tab");})

  $("#github-tab").click(function(){alert("github-tab");})
})
