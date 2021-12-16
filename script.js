

$('.btn-project-icon').click(function(){
  
  const videoSource = $(this).attr('data-src');
  $('.project-videos source').attr('src', videoSource);
  $('.project-videos')[0].load();

  
});

