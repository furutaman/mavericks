/* -------
gnをクローン
------- */
jQuery(function($){

  $('#js-gn').children('ul').clone().appendTo('#js-gn--clone');

});



/* -------
ハンガーバーアイコンのクリックイベント
------- */
jQuery(function($){

  var check = 0;
  var current_scrollY;

  $('#js-hamburger, #js-overlay').on('click', function(){

    current_scrollY = $( window ).scrollTop();

    if(check == 0){
      $('#js-hamburger').addClass('active');
      $('#js-gn--clone').addClass('active');
      $('#js-overlay').show();
      $('#js-totop').addClass('inactive');
      $('#js-nav-box_sns').addClass('inactive');
      $('#js-handle').addClass('inactive');
      check = 1;
    }else if(check == 1){
      $('#js-hamburger').removeClass('active');
      $('#js-gn--clone').removeClass('active');
      $('#js-overlay').hide();
      $('#js-totop').removeClass('inactive');
      $('#js-nav-box_sns').removeClass('inactive');
      $('#js-handle').removeClass('inactive');
      check = 0;
    }
  });

});


/* -------
スクロールで NavBox 表示
------- */
jQuery(function($){

  var target = $('#js-main');
  var target_offset;

  $(window).scroll(function() {
    target_offset = target.offset().top;
    if($(window).scrollTop() > target_offset) {
      $('#js-nav-box').addClass('active');
  }else{
      $('#js-nav-box').removeClass('active');
  }
  });

});
