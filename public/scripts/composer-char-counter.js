$(document).ready(function() {

 $(".new-tweet form textarea").on("keyup", function() {
    const char  = $(this).val().length;
    const max = 140;
    const count = $('.counter');
    count.text(max - char);
    if(char > max) {
      count.addClass("overMax");
    } else {
      count.removeClass("overMax");
    }
  });
});

//classof for css
//sibling to get to counter this.sibling

