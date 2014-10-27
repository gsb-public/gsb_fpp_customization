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
        if ($('#edit-cancel').length) {
          $('#edit-cancel').click();
        }
        else {
          Drupal.CTools.Modal.dismiss();
        }
      });

      // Add a body class when the modal opens
      $('body').addClass('panels-ipe-modal-open');

      // Hide the body class when the close button is clicked.
      $('.modal-header a.close').click(function() {
        $('body').removeClass('panels-ipe-modal-open');
      });

      // Hide the body class when the escape key is pressed.
      $(document).keyup(function (e) {
        if (e.keyCode == 27) {
          $('body').removeClass('panels-ipe-modal-open');
        }
      });
    }
  }
})(jQuery);
