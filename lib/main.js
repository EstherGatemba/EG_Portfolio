
$(document).ready(function(){
  //Parallax
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


//////////copy email link to clipboard
var email = document.getElementById('email');
var clipboard = new Clipboard(email);
clipboard.on('success', function(e) {
    console.log(e);
});
clipboard.on('error', function(e) {
    console.log(e);
});
console.log("new clipboard");

//google blogger
$.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/blogger/v3/blogs/3321422072724454476/posts/4794926612700289160?callback=?&key=AIzaSyDgnPOuEY6z-gFefr98vMdoArLkKhVhuzM',
    data: { get_param: 'value' },
    dataType: 'json',
    success: function (data) {
        $.each(data, function(index, element) {
            $('#blog').append($('<div>', {
                text: element.name
            }));
        });
    }
});
    console.log("show me the blogger");

});
