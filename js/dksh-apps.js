$(document).ready(function () {
  $('.btn-fav').on('click', function () {
    $parent = $(this).parent();
    console.log("click");
    $icon = $parent.find('.icon').attr('data-icon');
    $titile = $parent.find('.title').text();
    $content = $parent.find('p').text();
    $(this).addClass('active');
    $('.instruction').hide('slow');
    $('#my-fav').append("<div class='col-lg-4 col-sm-6 m-mb mb wrap'><div class='nav-cover'><small class='more'><b class='icon-delete'>Remove</b></small><span class='"+$icon+"'></span><h4 class='title'>"+$titile+"</h4><p>"+$content+"</p></div></div>")
  })
  $('body').on('click', '.more',function(){
    $parent =  $(this).parent();
    $parent.find('.more').toggleClass('open');
 })
  $('body').on('click', '.icon-delete',function(){
    $(this).closest('.wrap').remove();
  })
});