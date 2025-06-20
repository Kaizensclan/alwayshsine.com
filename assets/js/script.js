   $('#toggle').click(function() {
      $(this).toggleClass('active');
      $('#overlay').toggleClass('open');
  });

$(function() {

   $(".search-box .fa").css('color', '#FFF');
     
  $('.box').on('click touchstart', function(e) {
    event.stopPropagation();
    $('.box').not(this).removeClass('touched');
    $(this).toggleClass('touched').removeClass('hovered');
  });
  $('.box').on('mouseenter', function(e) {
    $(this).addClass('hovered');
  });
  $('.box').on('mouseleave', function(e) {
      $(this).removeClass('hovered');
  });
});


$(document).ready(function()
{       
   $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if(scroll < 300){
          $(".button_container span").css('background-color', '#FFF');
          $(".left-panel .fa").css('color', '#FFF');
          $(".search-box .fa").css('color', '#FFF');
          $(".fa-search:before").css('color', '#FFF');
      } else{
          $('.button_container span').css('background-color', '#000');
          $(".left-panel .fa").css('color', '#000');
          $(".search-box .fa").css('color', '#000');
          $(".fa-search:before").css('color', '#000');
      }
  });
});




$(document).ready(function() {
    var tId;
    $(".alert").hide().slideDown(1000);
    clearTimeout(tId);
    tId=setTimeout(function(){
      $(".alert").hide();        
    }, 10000);     
    
     $('#removeAlert').on('click touchstart', function(e) {
         $(".alert").hide();
     });
});  


$(document).ready(function() 
{
    const swiper = new Swiper('.swiper-container', {
        	effect: 'coverflow',
        	centeredSlides: true,
        	slidesPerView: 1,
        	loop: true,
        	speed: 600,
        	
         	autoplay: {
        		delay: 3000,
         	},
        	
        	coverflowEffect: {
        		rotate: 50,
        		stretch: 0,
        		depth: 100,
        		modifier: 1,
        		slideShadows: true,
        	},
        	
        	breakpoints: {
        		320: {
        			slidesPerView: 2,
        		},
        		560: {
        			slidesPerView: 3,
        		},
        		990: {
        			slidesPerView: 4,
        		}
        	},
        
        	pagination: {
        		el: '.swiper-pagination',
        		clickable: true,
        	},
        
        	navigation: {
        		nextEl: '.swiper-button-next',
        		prevEl: '.swiper-button-prev',
        	},
        });  
        
 
        
    });


        $('video').bind('play', function (e) 
        {
            var video = $('video');
            for(var i=0;i<video.length;i++)
            {
                if(video[i] != e.target)
                {
                   video[i].pause();
                }
            }
        });


document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;    

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {  
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
})


