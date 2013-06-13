(function ($) {
  Drupal.behaviors.gsbfppcustomization = {
    attach: function(context, settings) {

      // initialize superfish for the add fpp content menu
      $('#add-fpp-content-menu').superfish({
        animation: {height:'show'},   // slide-down effect without fade-in
        delay:     1000               // 1.2 second delay on mouseout
      });

      // trigger the 'back' link via a cancel button click
      $('#back-link, #cancel-link').click(function(event) {
        event.preventDefault();
        $('.gsb-panopoly-magic-customization-cancel-button').click();
      });
        
    }
  }
})(jQuery);
