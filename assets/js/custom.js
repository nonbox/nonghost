// Hamburger Menu
var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }

$(document).ready(function(){

// Instagram API
$.ajax({
type: "GET",
dataType: "jsonp",
cache: false,
url: "https://api.instagram.com/v1/users/self/media/recent/?access_token=2301975641.c85e772.049f3b97326b4d3ea7a1bb976066d419&count=8",
// Result JSON above
// {"meta": {"code": 200}, "data": {"username": "malvouz", "bio": "", "website": "", "profile_picture": "https://scontent.cdninstagram.com/t51.2885-19/11906329_960233084022564_1448528159_a.jpg", "full_name": "", "counts": {"media": 0, "followed_by": 2, "follows": 7}, "id": "2301975641"}}
success: function(response) {
    //console.log(response.data.thumbnail.url);
    
    for (i = 0; i < 9; i++)
    {
    var src = response.data[i].images.standard_resolution.url;
    var url = response.data[i].link;
  //console.log(src);

      $(".instagram-widget").append($("<a>", 
      {
          href: url, 
          html: $("<img>", { src: src })
      }));

    }; // for loop
    } // success
});


  // Mouse Enter for Slider Image
  $('.wrapper-featured').mouseenter(function(){
$(this).find('.wrapper-featured-content').show();
  }).mouseleave(function(){
$(this).find('.wrapper-featured-content').hide();
  });

  // Sidr Menu
        $('#simple-menu').sidr({
        timing: 'ease-in-out',
        side: 'right'
      });
  // Remove Class
  $( "#sidr ul" ).removeClass( "nav" )

  // Responsive Menu
  $('.responsive-menu').on('click', function(e) {
    e.preventDefault();
    $('.mobile-menu').slideToggle();
    //console.log ('Work');
  });  


}); //document.ready

$( window ).resize(function () {
      $.sidr('close', 'sidr');
    });

// Typed.js
    $(function(){

        $("#typed").typed({
            // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
            stringsElement: $('#typed-strings'),
            typeSpeed: 100,
            backDelay: 1000,
            loop: true,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
           // callback: function(){ foo(); },
            //resetCallback: function() { newTyped(); }
        });

        $(".reset").click(function(){
            $("#typed").typed('reset');
        });

    });
