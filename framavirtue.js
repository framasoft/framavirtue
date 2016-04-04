jQuery('document').ready(function(){
    /* Habillage Social2Clics + Diaspora */
    jQuery('.social_share_privacy').addClass('well').css('padding','0 19px'); /* mise en forme */
    jQuery('.social_share_privacy .settings_info').remove();
    jQuery('.social_share_privacy ul').prepend('<li class="settings_info"></li>');
    jQuery('.social_share_privacy .settings_info').append(jQuery('#diaspora-button-container')); /* déplacement du bouton diaspora */

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

    /* Boutons PDF/Imprimer */
    jQuery('a[href*="print=pdf"]').html('<i class="fa fa-fw fa-lg fa-file-pdf-o"></i> <abbr>PDF</abbr>').addClass('btn btn-default');
    jQuery('a[href*="print=print"]').html('<i class="fa fa-fw fa-lg fa-print"></i> Imprimer').addClass('btn btn-default');
    jQuery('.pdfprnt-top-right').addClass('btn-group btn-group-xs pdf-print').removeClass('pdfprnt-top-right').css('margin-top','-1px').wrap('<div class="text-right"></div>');
    jQuery('.home .pdf-print,.archive .pdf-print,.search .pdf-print').remove();

    /* Author Bio Box */
    var f$_avatar = jQuery('#author-bio-box img.avatar');
    var f$_default_avatar = function() {
        if(f$_avatar.get(0).naturalWidth === 0) {
            f$_avatar.attr('src', '/wp-content/plugins/fv-gravatar-cache/images/default.png')
        }
    }
    if(f$_avatar.length) {
        f$_avatar
            .css('height','90px')
            .on('load', function(){if(f$_avatar.get(0).complete) {f$_default_avatar()}})
            .on('error', f$_default_avatar());
    }
});