<?php
$url = get_home_url();
$page = 'Home';

if( is_singular('services') ):
    $url = get_post_type_archive_link( 'services' );
    $page = 'Services';
endif;

?>

<a href="<?php echo $url; ?>" class="crumb"><i class="fas fa-chevron-circle-left"></i> <?php echo $page ?></a>