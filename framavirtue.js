jQuery('document').ready(function(){
    /* Habillage Social2Clics + Diaspora */
    jQuery('.social_share_privacy').addClass('well').css('padding','0 19px'); /* mise en forme */
    jQuery('.social_share_privacy .settings_info').append(jQuery('#diaspora-button-container')); /* insertion du bouton diaspora */
    jQuery('.twoclick-facebook').before(jQuery('.social_share_privacy .settings_info')); /* Diaspora placé avant Facebook */

    /* Suppression des images vides */
    jQuery('.col-md-5').has('img[src$="post_standard.jpg"]').each(function() {
        jQuery(this).hide();
        jQuery(this).next('.col-md-7').addClass('col-md-12').removeClass('col-md-7');
    });
    jQuery('img[src$="post_standard.jpg"]').hide();

    /* Bouton pause carrousel */
    jQuery('.slides').after('<div class="text-center" id="play-pause"><a href="#play-pause" class="fc_light" title="Pause"><span class="glyphicon glyphicon-pause"></span><span class="sr-only">Pause</span></a></div>');

    jQuery("#play-pause a").on('click', function() {
        if(jQuery(this).children('.glyphicon').hasClass('glyphicon-pause')) {
            jQuery(this).children('.glyphicon').addClass('glyphicon-play').removeClass('glyphicon-pause');
            jQuery(this).attr('title','Lecture');
            jQuery(this).children('.sr-only').text('Lecture');
            jQuery('.flexslider').flexslider('pause');
        } else {
            jQuery(this).children('.glyphicon').addClass('glyphicon-pause').removeClass('glyphicon-play');
            jQuery(this).attr('title','Pause');
            jQuery(this).children('.sr-only').text('Pause');
            jQuery('.flexslider').flexslider('play');
        };
        return false;
    });

    /* Avatar */
    jQuery('#author-bio-box img.avatar').error(function() {
        jQuery(this).unbind('error').attr('src', '/wp-content/plugins/fv-gravatar-cache/images/default.png');
    });

    /* Boutons PDF/Imprimer */
    jQuery('a[href$="print=pdf"]').html('<i class="fa fa-fw fa-lg fa-file-pdf-o"></i> <abbr>PDF</abbr>').addClass('btn btn-default');
    jQuery('a[href$="print=print"]').html('<i class="fa fa-fw fa-lg fa-print"></i> Imprimer').addClass('btn btn-default');
    jQuery('.pdfprnt-top-right').addClass('btn-group btn-group-sm pull-right').removeClass('pdfprnt-top-right');
    jQuery('.home .pdfprnt-top-right').remove();
});