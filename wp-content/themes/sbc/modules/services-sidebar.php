<div class="col col-3 d-none d-md-block">
    <div class="service-menu">
        <h3>Services</h3>
        <?php foreach ( $posts as $post ): setup_postdata($post) ?>
            <a href="<?php the_permalink(); ?>">
                <i class="fas fa-chevron-circle-right"></i>
                <h4 class="service-title"><?php echo $post->post_title ?></h4>
            </a>
        <?php endforeach ?>
    </div>
</div>
