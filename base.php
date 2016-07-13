<?php get_template_part('templates/head'); ?>
  <body <?php body_class(); ?>>
    <script type="text/javascript" src="https://framasoft.org/nav/nav.js"></script>
    <div id="wrapper" class="container">
    <?php do_action('get_header');
        get_template_part('templates/header');
    ?>
      <div class="wrap contentclass" role="document">

      <?php do_action('kt_afterheader');

          include kadence_template_path(); ?>

          <?php if (kadence_display_sidebar()) : ?>
            <aside class="<?php echo esc_attr(kadence_sidebar_class()); ?> kad-sidebar" role="complementary">
              <div class="sidebar">
                <?php include kadence_sidebar_path(); ?>
              </div><!-- /.sidebar -->
            </aside><!-- /aside -->
          <?php endif; ?>
          </div><!-- /.row-->
        </div><!-- /.content -->
      </div><!-- /.wrap -->
      <?php do_action('get_footer');
      get_template_part('templates/footer'); ?>
    </div><!--Wrapper-->
    <script type="text/javascript" src="<?php echo str_replace('virtue', 'framavirtue', get_template_directory_uri()); ?>/framavirtue.js"></script>
  </body>
</html>
