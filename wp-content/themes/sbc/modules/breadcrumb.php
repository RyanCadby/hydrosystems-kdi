<?php
$url = get_home_url();
$page = 'Home';

if( is_singular('services') ):
    $url = get_post_type_archive_link( 'services' );
    $page = 'Services';
elseif( is_tax('project_category') ):
    $url = get_post_type_archive_link( 'projects' );
    $page = 'Projects';
endif;

?>

<a href="<?php echo $url; ?>" class="crumb"><i class="fas fa-chevron-circle-left"></i> <?php echo $page ?></a>