(function ($) {
  Drupal.behaviors.gsbfppcustomization = {
    attach: function(context, settings) {

      // todo: Would really like to change how this works.
      // ok... wow this is wild. 
      // Drupal for some reason renames the cancel button each time
      // the form is submitted. So I had to resort to this method to 
      // find the cancel button. 
      var cancelButton = null;
      $('.form-submit').each(function(index) {
        if ($(this).val() == 'Cancel') {
          cancelButton = $(this);
        }
      });

      // hide the cancel button, which functionally is replaced by
      // the 'back' and 'cancel' links
      cancelButton.hide();

      // initialize superfish for the add fpp content menu
      $('#add-fpp-content-menu').superfish({
        animation: {height:'show'},   // slide-down effect without fade-in
        delay:     1000               // 1.2 second delay on mouseout
      });

      // trigger the 'back' link via a cancel button click
      $('#back-link').click(function(event) {
        event.preventDefault();
        cancelButton.click();
      });

      // trigger the 'cancel' link via a cancel button click
      $('#cancel-link').click(function(event) {
        event.preventDefault();
        cancelButton.click();
      });
        
    }
  }
})(jQuery);

