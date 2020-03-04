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
        <?php foreach ( $services as $service ):
            setup_postdata($service);
            $service_id = $service->ID;
            $service_link = get_post_permalink($service_id);
            $service_title = $service->post_title;
        ?>
            <a href="<?php echo $service_link; ?>">
                <i class="fas fa-chevron-circle-right"></i>
                <h4 class="service-title"><?php echo $service_title; ?></h4>
            </a>
        <?php endforeach ?>
        <?php wp_reset_postdata(); ?>
    </div>
</div>
