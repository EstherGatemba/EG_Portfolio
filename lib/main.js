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

window.onload = function() {
  var box1 = document.getElementsByClassName("box1"),
		    box2 = document.getElementsByClassName("box2"),
		    box3 = document.getElementsByClassName("box3");
        logo = document.getElementsByClassName('logo')

  TweenLite.to([box1, box2, box3], 1, {scale:0.2, opacity:0.3});
}

console.log("colors have loaded");
});
