<?php get_header(); ?>

<div class="main-container">
	<?php $banner_url = get_field('front_banner_image')["url"]; ?>

	<div class="banner-image" style="background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)) ,url(<?= $banner_url ?>)">
        <div class="banner-text-wrapper center-vertical">
            <h1><?= get_field('banner_text') ?></h1>
            <h5><?= get_field('banner_subtext') ?></h5>
        </div>
	</div>

</div>

<?php get_footer(); ?>
