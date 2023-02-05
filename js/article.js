$( document ).ready(function() {
    $(".burger-menu ").on("click",".bar",function(e){
        $(".black-header").slideToggle();
        $(".bar").toggleClass('change');
        $('.header-navigation_block').toggleClass('show');
        e.preventDefault();

        $('body').toggleClass('fixed');
    });

    $(document).on('click', function(e) {
        if (!$(e.target).closest("body").length) {
          $('.header-navigation_block').hide();
        }
        e.stopPropagation();
      });

});