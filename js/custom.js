jQuery(document).ready(function($) {

  $('.navbar-toggle').on('click', function() {
    $('body').toggleClass('menu-open');
  });

    //Sticky HEADER
    $(window).scroll(function(){
      var sticky = $('#fixed-header'),
          headerHeight = $('#header').height(),
          fhHeight = 0,
          scroll = $(window).scrollTop();

      if(('#wpadminbar').length > 0){
        fhHeight += $('#wpadminbar').height();
      } else {
        fhHeight;
      }

      if (scroll > headerHeight){
        sticky.css('top', fhHeight + 'px');
      } else {
        sticky.css({ top: '-100%' });
      }
    });

    //Slide in Search Bar
    $(".search-icon").click(function(){
  		$("#search-container").css("top","0");
  	});
  	$("#close-search").click(function(){
  		$("#search-container").css("top","-100%");
  	});

    //Custom Video Control
      $("#homepage-video").prop('muted', true);
      $("#homepage-video-mobile").prop('muted', true);

      $(".btn-pause").click( function (){
          $("#homepage-video").get(0).pause();
          $('.hid').css("display", "block");
          $('.post-info').css("background", "#2e2e2e");
          $('.btn-pause .fa-pause').css("color", "#fff");
          $('.btn-play .fa-play').css("color", "#bababa");
      });

      $(".btn-play").click( function (){
          $("#homepage-video").get(0).play();
          $('.hid').css("display", "none");
          $('.post-info').css("background", "transparent");
          $('.btn-pause .fa-pause').css("color", "#bababa");
          $('.btn-play .fa-play').css("color", "#fff");
      });

      //   $(".home #lay1 .post").mouseover(function(){
      //     $("#homepage-video").get(0).pause();
      //     $('.fa-pause').css("color", "#fff");
      //     $('.fa-play').css("color", "#bababa");
      //   });
      //
      //   $(".home #lay1 .post").mouseleave(function(){
      //     $("#homepage-video").get(0).play();
      //     $('.fa-pause').css("color", "#bababa");
      //     $('.fa-play').css("color", "#fff");
      //   });

      $(".btn-mute").click( function (){
          if( $("#homepage-video").prop('muted') ) {
                $("#homepage-video").prop('muted', false);
                $(".btn-mute").find('.fa').addClass('fa-volume-up').removeClass('fa-volume-off');
          } else {
            $("#homepage-video").prop('muted', true);
            $(".btn-mute").find('.fa').addClass('fa-volume-off').removeClass('fa-volume-up');
          }
      });

      //Mobile Video

      $(".btn-pause-mobile").click( function (){
          $("#homepage-video-mobile").get(0).pause();
          $('.btn-pause-mobile .fa-pause').css("color", "#fff");
          $('.btn-play-mobile .fa-play').css("color", "#bababa");
      });

      $(".btn-play-mobile").click( function (){
          $("#homepage-video-mobile").get(0).play();
          $('.btn-pause-mobile .fa-pause').css("color", "#bababa");
          $('.btn-play-mobile .fa-play').css("color", "#fff");
      });

      $(".btn-mute-mobile").click( function (){
          if( $("#homepage-video-mobile").prop('muted') ) {
                $("#homepage-video-mobile").prop('muted', false);
                $(".btn-mute-mobile").find('.fa').addClass('fa-volume-up').removeClass('fa-volume-off');
          } else {
            $("#homepage-video-mobile").prop('muted', true);
            $(".btn-mute-mobile").find('.fa').addClass('fa-volume-off').removeClass('fa-volume-up');
          }
      });

        $(window).resize(function() {
          if($(window).width() < 992){
             $("#homepage-video").prop('muted', true);
             $(".btn-mute").find('.fa').addClass('fa-volume-off').removeClass('fa-volume-up');
           } else {
             $("#homepage-video-mobile").prop('muted', true);
             $(".btn-mute-mobile").find('.fa').addClass('fa-volume-off').removeClass('fa-volume-up');
           }
        });


      // Load More Ajax
      // if($("#load_more_button").length > 0){
      //
      //     var track_page = 1;
      //     load_contents(track_page);
      //     $("#load_more_button").click(function (e) {
      //       track_page++;
      //       load_contents(track_page);
      //     });
      //
      //     $('#advance_search').on('submit',function(){
      //       formData = $(this).serialize();
      //       track_page=1;
      //       $("#results").html('');
      //
      //       load_contents(track_page);
      //       return false;
      //     });
      //
      //     /* //Ajax load function
      //      */
      //
      //     function load_contents(track_page1){
      //       var url = window.location.pathname.substr(1),
      //       parts = url.split("/"),
      //       last_part = parts[parts.length-2];
      //
      //       //search parameter
      //       var url_one = window.location.href,
      //       parts_one = url_one.split("="),
      //       search_part = parts_one[parts_one.length-1].split("+").join(" ");
      //       // console.log(search_part);
      //
      //       //Tag
      //       var url_two = window.location.pathname.substr(1),
      //       tag_parts = url_two.split("/"),
      //       tag_part = tag_parts[tag_parts.length-2];
      //
      //
      //       $.post( ajaxurl, {'p': track_page1,'action':'grab_posts', 'cat_name': last_part, 'search_term': search_part, 'tag_name': tag_part}, function(data){
      //
      //         if(data == 300){
      //           $("#load_more_button").addClass('disabled');
      //           $("#load_more_button").text("No Posts").prop("disabled", true);
      //         }
      //
      //          if(data != 300){
      //            $("#results").append(data);
      //            $("#load_more_button").css('visibility', 'visible');
      //          }
      //
      //         $("#load_more_button").offset().top
      //       });
      //     }
      //   }
});
