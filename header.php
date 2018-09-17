<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "container" div.
 *
 * @package FoundationPress
 * @since FoundationPress 1.0.0
 */

?>
<!doctype html>
<html class="no-js" <?php language_attributes(); ?> >
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="<?php bloginfo('template_directory'); ?>/dist/assets/images/favicon.png">
		<?php wp_head(); ?>
	</head>
	<body <?php body_class(); ?>>

    <header class="nav-menu" data-sticky-container>
        <div class="top-bar" data-sticky data-sticky-on="small" data-margin-top="0">
            <div class="top-bar-left">
                <div class="nav-logo">
                    <a href="<?php echo home_url(); ?>" title="Home">
                        <img src="" alt="">
                    </a>
                </div>
                <div class="nav-title show-for-medium">
                    <img src="<?php bloginfo('template_directory'); ?>/dist/assets/images/title.png" alt="">
                </div>
            </div>
            <div class="top-bar-right">
                <div class="show-for-large">
                    <?php
                    $parent_ul = '<ul class="dropdown menu" data-dropdown-menu>%3$s</ul>';

                    $nav_args = array(
                        'theme_location' => 'header-menu',
                        'items_wrap' => $parent_ul,
                        'container' => '',
                        'item_spacing' => 'discard'
                    );

                    wp_nav_menu($nav_args); ?>
                </div>
                <div class="hide-for-large">
                    <a class="nav-menu-button" data-toggle="mobile-menu"><i class="fas fa-bars"></i> Menu</a>
                </div>
            </div>
        </div>
    </header>

    <div class="off-canvas-wrapper">
        <div id="mobile-menu" class="off-canvas position-right" data-off-canvas>
            <?php
            $parent_ul = '<ul class="vertical menu drilldown" data-drilldown>%3$s</ul>';

            $nav_args = array(
            'theme_location' => 'header-menu',
            'items_wrap' => $parent_ul,
            'container' => '',
            'item_spacing' => 'discard'
            );

            wp_nav_menu($nav_args) ?>
        </div>
    </div>

