<footer>
    <div class="social-container">
      <?php
        $mypod = pods('social');
        $mypod->find('name ASC');
      ?>

      <?php while ( $mypod->fetch() ) : ?>
        <?php 
        //set our variables
        $permalink= $mypod->field('permalink');
        $social_icon= $mypod->field('social_icon');
        $social_url_username= $mypod->field('social_url_username');
        ?>
        <a href="<?php echo $social_url_username ?>" target="_blank">
        <i class="<?php echo $social_icon ?>"></i>
        </a>
      <?php endwhile; ?>     

    </div>
    <h5><?php echo get_bloginfo('name'); ?></h5>
    <h6>Web Developer</h6>
</footer>

    <script type="module" src="<?php echo get_bloginfo('template_directory'); ?>/js/app.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>


    <?php wp_footer(); ?>
  </body>
</html>
