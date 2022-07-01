
//Changes the videos
$('.btn-project-icon').click(function() {
  const videoSource = $(this).attr('data-src');
  $('.project-videos source').attr('src', videoSource);
  $('.project-videos')[0].load();

  
  
  if(videoSource == "/images/project-1-video.mp4")
  {
    $('.work-text').html("<h2>Beachside Bakery</h2>\
              <p>Craving sweets? Check out a local bakery in Huntington Beach, CA. This is a website made with react. The customer can add bake goods to a cart and place orders with this website.</p>\
              <h3>Made with</h3>\
             ");
       var iconClass = ["fa-brands fa-html5 fa-3x", "fa-brands fa-css3-alt fa-3x", "fa-brands fa-react fa-3x", "fa-brands fa-js-square fa-3x"];
    $(".work-description").find("i").removeClass().addClass(function(index){
          return iconClass[index];
        });
    
  }
  else if(videoSource == "/images/project-2-video.mp4")
  {
   $('.work-text').html("<h2>Simon Game</h2>\
              <p>A simple game of simon. </p>\
              <h3>Made with</h3>\
            ");

   var iconClass = ["fa-brands fa-html5 fa-3x", "fa-brands fa-css3-alt fa-3x", "fa-brands fa-js-square fa-3x"];
    $(".work-description").find("i").removeClass().addClass(function(index){
          return iconClass[index];
        });

  }

  else if(videoSource == "/images/project-3-video.mp4")
  {
   $('.work-text').html("<h2>Tesla Clone Website</h2>\
              <p>Clone website of Tesla.com</p>\
              <h3>Made with</h3>\
            ");

   var iconClass = ["fa-brands fa-html5 fa-3x", "fa-brands fa-css3-alt fa-3x", "fa-brands fa-js-square fa-3x"];
    $(".work-description").find("i").removeClass().addClass(function(index){
          return iconClass[index];
        });

  }
});

//Changes the link of demo and github page
$('.demo').click(function() {
  var videoSrc = $('.project-videos source').attr('src');
  if(videoSrc == "/images/project-1-video.mp4")
  {
    $('.demo').attr('href', "https://beachside-bakery.netlify.app");
  }
  else if(videoSrc == "/images/project-2-video.mp4")
  {
    $('.demo').attr('href', "https://simongameglen.netlify.app");
  }
  else if(videoSrc == "/images/project-3-video.mp4")
  {
    $('.demo').attr('href', "https://glen-tesla-clone.netlify.app/");
  }
});


$('.code').click(function() {
  var videoSrc = $('.project-videos source').attr('src');
  if(videoSrc == "/images/project-1-video.mp4")
  {
    $('.code').attr('href', "https://github.com/gleny4001");
  }
  else if(videoSrc == "/images/project-2-video.mp4")
  {
    $('.code').attr('href', "https://github.com/gleny4001/simon-game");
  }
  else if(videoSrc == "/images/project-3-video.mp4")
  {
    $('.code').attr('href', "https://github.com/gleny4001/Tesla-Clone-website");
  }
});

