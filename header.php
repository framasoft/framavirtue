<?php
/*
DO NOT ADD SCRIPTS HERE
USE a plugin like : https://wordpress.org/plugins/header-and-footer-scripts/

- Force plugins to stop stating incorrect errors -
<?php wp_head(); ?>
*/

get_template_part( 'templates/head' ); ?>
	
	<body <?php body_class(); ?>>
        <script type="text/javascript" src="https://framasoft.org/nav/nav.js"></script>
        <script type="text/javascript" src="<?php echo str_replace('virtue', 'framavirtue', get_template_directory_uri()); ?>/framavirtue.js"></script>
	<?php 
		do_action( 'virtue_after_body' );
	?>

	<div id="wrapper" class="container">
	<?php 
		get_template_part( 'templates/header' );