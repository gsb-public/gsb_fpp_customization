(function ($) {

  Drupal.behaviors.gsbfppcustomization = {
    attach: function(context, settings) {

      if ($('.fieldable-pane-pane-form-reusable-information').length > 0) {
        new Drupal.gsbfppcustomizationReusable();
      }

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

      if (!$('body').hasClass('panels-ipe-modal-open')) {
        // Add a body class when the modal opens
        $('body').addClass('panels-ipe-modal-open');
        // Hide the body class when the modal disappears.
        var timer = setInterval(function() {
          if (!$('#modalContent').length) {
            $('body').removeClass('panels-ipe-modal-open');
            clearInterval(timer);
          }
        }, 5000);
      }
    }
  };

  // some serious monkey-business here...
  // drupal's misc/vertical-tabs.js is hiding the reusable 'tab'
  // in the fpp modal popup/dialog.
  // so the following code will re-show the reusable 'tab'
  Drupal.gsbfppcustomizationReusable = function (settings) {
    var self = this;
    var timer = setInterval(function() {
      self.reshow();
      clearInterval(timer);
    }, 500);
  };

  Drupal.gsbfppcustomizationReusable.prototype = {
    reshow: function () {
      if ($('.fieldable-pane-pane-form-reusable-information').length > 0) {
        $('.fieldable-pane-pane-form-reusable-information').show();
      }
    }
  };

})(jQuery);
