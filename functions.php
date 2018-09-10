<?php
function framavirtue_register_style() {
    wp_register_style( 'redux-google-fonts-virtue', '');
}
add_action( 'wp_enqueue_scripts', 'framavirtue_register_style' );
 ?>
