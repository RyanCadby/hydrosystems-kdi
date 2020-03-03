<?php get_header();

$args =  array(
    'numberposts' => -1,
    'post_status' => 'published',
    'post_type' => 'post'
);
$posts = get_posts($args);


?>


<section>
    <div class="container">
        <div class="row">
            <div class="col col-12 div col-lg-8">
                <?php foreach( $posts as $post ):
                $excerpt = $post->post_excerpt;
                $content = $post->post_content;
                $link = get_permalink();
                if(!$excerpt){
                    $excerpt = wp_trim_words($content, 55);
                }
                ?>
                <div class="blog-prev">
                    <h2><?php echo $post->$title; ?></h2>
                    <p><?php echo $excerpt; ?></p>
                    <a href="<?php echo $link; ?>">Read More</a>
                </div>
                <?php endforeach ?>
            </div>
        </div>
    </div>
</section>



<?php get_footer(); ?>
