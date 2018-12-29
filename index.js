$(document).ready(function(){  

  $("#about-tab").click(function(){alert("about-tab");})

  $("#resume-tab").click(function(){alert("resume-tab");})

  $("#linkedin-tab").click(function(){alert("linkedin-tab");})

  $("#github-tab").click(function(){alert("github-tab");})

  let init_header_position = $('#header').offset().top
  let header = $("#header")

  $(window).on("scroll touchmove", function() {
    let scroll = $(window).scrollTop()
    console.log(scroll);
    if(scroll >= init_header_position){
      header.removeClass('sticky');
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
      header.addClass('sticky');
    }
  })
})
