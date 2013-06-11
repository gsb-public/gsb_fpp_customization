(function ($) {
  Drupal.behaviors.gsbfppcustomization = {
    attach: function(context, settings) {

      // hide the cancel button, which functionally is replaced by
      // the 'back' and 'cancel' links
      $('#edit-cancel').hide();

      // initialize superfish for the add fpp content menu
      $('#add-fpp-content-menu').superfish({
        animation: {height:'show'},   // slide-down effect without fade-in
        delay:     1000               // 1.2 second delay on mouseout
      });

      // trigger the 'back' link via a cancel button click
      $('#back-link').click(function(event) {
        event.preventDefault();
        $('#edit-cancel').click();
      });

      // trigger the 'cancel' link via a cancel button click
      $('#cancel-link').click(function(event) {
        event.preventDefault();
        $('#edit-cancel').click();
      });
        
    }
  }
})(jQuery);
