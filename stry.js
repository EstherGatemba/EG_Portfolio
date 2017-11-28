
//Parallax
$(document).ready(function(){
  var scroll_start = 1;
  var startchange = $('#startchange');
  var offset = startchange.offset();
  if (startchange.length){
    $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
        $(".navbar-default").css('background-color', '#ffffff');
      } else {
        $('.navbar-default').css('background-color', 'transparent');
      }
    });
  }
  console.log("document has loaded");
  //copy link to clipboard
  function copyToClipboard(element) {
    var $temp = $("#email");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }
  console.log("copyToClipboard has loaded");

$(function){
  var controller = new ScrollMagic.Controller();
}
var blockTween = new TweenMax.('#logo', 0.5, {
    backgroundColor: 'black'

TweenMax.from(#myPic)
});
