

$('.btn-project-icon').click(function() {
  const videoSource = $(this).attr('data-src');
  $('.project-videos source').attr('src', videoSource);
  $('.project-videos')[0].load();
});


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
});


