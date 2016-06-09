(function ($) {
  Drupal.behaviors.gsbfppcustomization = {
    attach: function(context, settings) {

      // some serious monkey-business here...
      // drupal's misc/vertical-tabs.js is hiding the reusable 'tab'
      // on the fpp modal popup/dialog.
      // so the following code will re-show the reusable 'tab'
      if ($('.fieldable-pane-pane-form-reusable-information').length > 0) {
        var oldHide = $.fn.hide;
        $.fn.hide = function(args) {
          var hideClass = this.attr('class');
          if (hideClass != undefined && hideClass.indexOf('fieldable-pane-pane-form-reusable-information') != -1) {
            var showInt = setInterval(function(){
              $('.fieldable-pane-pane-form-reusable-information').show();
              $.fn.hide = oldHide;
              clearInterval(showInt);
            }, 500);
          }
          oldHide.apply(this, args);
        };
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
  }
})(jQuery);
