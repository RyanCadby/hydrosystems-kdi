<?php

$args = array(
    'post_type' => 'services',
    'post_status' => 'publish',
    'posts_per_page' => -1
);
$services = get_posts($args);



?>

<div class="col col-3 d-none d-md-block">
    <div class="service-menu">
        <h3>Services</h3>
        <?php foreach ( $services as $service ): setup_postdata($service) ?>
            <a href="<?php the_permalink(); ?>">
                <i class="fas fa-chevron-circle-right"></i>
                <h4 class="service-title"><?php echo $service->post_title ?></h4>
            </a>
        <?php endforeach ?>
    </div>
</div>
