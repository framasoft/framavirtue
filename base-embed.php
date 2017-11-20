<?php 
if ( ! headers_sent() ) {
  header( 'X-WP-embed: true' );
}
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<?php
	/**
	* Print scripts or data in the embed template <head> tag.
	*
	* @since 4.4.0
	*/
	do_action( 'embed_head' );
	?>
</head>
<body <?php body_class(); ?>>
        <script type="text/javascript" src="https://framasoft.org/nav/nav.js"></script>
	<?php
	include kadence_template_path(); 

	do_action( 'embed_footer' );
?>
        <script type="text/javascript" src="<?php echo str_replace('virtue', 'framavirtue', get_template_directory_uri()); ?>/framavirtue.js"></script>
</body>
</html>