$( document ).ready(function() {
    $(".burger-menu ").on("click",".bar",function(e){
        $(".bar").toggleClass('change');
        $('.header-navigation_block').toggleClass('show');
        e.preventDefault();

        $('body').toggleClass('fixed');
        $('header').toggleClass('fixed');
    });

    $(".header-navigation a, .language_block a").on("click", function(e){
      $(".bar").removeClass('change');
      $('.header-navigation_block').removeClass('show');
      e.preventDefault();

      $('body').removeClass('fixed');
      $('header').removeClass('fixed');
  });


    $(document).on('click', function(e) {
        if (!$(e.target).closest("body").length) {
          $('.header-navigation_block').hide();
        }
        e.stopPropagation();
      });

});