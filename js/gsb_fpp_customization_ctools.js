(function ($) {
  Drupal.behaviors.gsbfppcustomization_ctools = {
    attach: function(context, settings) {
      // Hide the 'Categories' select on the Panels IPE Change Layout modal
      if ($('.panels-choose-layout').length > 0) {
        $('.form-item-categories').hide();
      }
    }
  }
})(jQuery);
