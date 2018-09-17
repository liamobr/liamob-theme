<?php
if(!class_exists('Footer_Widget')){

	class Footer_Widget extends WP_Widget {

		/**
		 * Sets up the widgets name etc
		 */
		public function __construct() {
			$widget_ops = array(
				'classname' => 'footer',
				'description' => 'Footer that appears at the bottom of every page.'
			);
			parent::__construct( 'footer', 'Footer', $widget_ops );
		}

		/**
		 * Outputs the content of the widget
		 *
		 * @param array $args
		 * @param array $instance
		 */
		public function widget( $args, $instance ) {
		    ?>

            <div class="footer-container">
                <div class="footer-links row full-width">
                    <?php

                    if(have_rows('footer_links', 'widget_' . $this->id)){
                        while(have_rows('footer_links', 'widget_' . $this->id)){
                            the_row();

                            $link_category = get_sub_field('footer_link_category');
                            ?>
                            <div class="columns small-12 medium-4 large-3">
                                <h5><?= $link_category ?></h5>
                                <ul class="footer-links-sublist">
                                    <?php
                                    if(have_rows('page_links', 'widget_' . $this->id)){
                                        while(have_rows('page_links', 'widget_' . $this->id)){
                                            the_row();

                                            $post = get_sub_field('page');
                                            $url = get_permalink($post);
                                            $title = get_the_title($post);
                                            ?>
                                            <li class="footer-link">
                                                <div>
                                                    <a href="<?= $url ?>">
		                                                <?= $title ?>
                                                    </a>
                                                </div>
                                            </li>
                                            <?php
                                        }
                                    }
                                    ?>
                                </ul>
                            </div>
                            <?php
                        }
                    }
                    ?>
                </div>

                <div class="footer-social-media">
                    <?php
                    if(have_rows('footer_social_media_icons', 'widget_' . $this->id)) {
                        while ( have_rows( 'footer_social_media_icons', 'widget_' . $this->id ) ) {
                            the_row();

                            $url = get_sub_field('social_media_link');
                            $image_url = get_sub_field('social_media_icon')['url'];
                            ?>

                            <a href="<?= $url ?>" target="_blank">
                                <img class="footer-icon" src="<?= $image_url ?>">
                                <h6 class="show-for-medium"><?= get_sub_field('social_media_name'); ?></h6>
                            </a>

                            <?php
                        }
                    }   ?>
                </div>

                <div class="footer-content">
	                <?php the_field('footer_content', 'widget_' . $this->id); ?>
                </div>
            </div>

            <?php
		}

		/**
		 * Outputs the options form on admin
		 *
		 * @param array $instance The widget options
		 */
		public function form( $instance ) {}

		/**
		 * Processing widget options on save
		 *
		 * @param array $new_instance The new options
		 * @param array $old_instance The previous options
		 *
		 * @return array
		 */
		public function update( $new_instance, $old_instance ) {}

	}

}

add_action( 'widgets_init', function(){
	register_widget( 'Footer_Widget' );
});
