<?php
/**
 * Enqueue all styles and scripts
 *
 * Learn more about enqueue_script: {@link https://codex.wordpress.org/Function_Reference/wp_enqueue_script}
 * Learn more about enqueue_style: {@link https://codex.wordpress.org/Function_Reference/wp_enqueue_style }
 *
 * @package FoundationPress
 * @since FoundationPress 1.0.0
 */


// Check to see if rev-manifest exists for CSS and JS static asset revisioning
//https://github.com/sindresorhus/gulp-rev/blob/master/integration.md

if ( ! function_exists( 'foundationpress_asset_path' ) ) :
	function foundationpress_asset_path( $filename ) {
		$filename_split = explode( '.', $filename );
		$dir            = end( $filename_split );
		$manifest_path  = dirname( dirname( __FILE__ ) ) . '/dist/' . $dir . '/rev-manifest.json';

		if ( file_exists( $manifest_path ) ) {
			$manifest = json_decode( file_get_contents( $manifest_path ), true );
		} else {
			$manifest = [];
		}

		if ( array_key_exists( $filename, $manifest ) ) {
			return $manifest[ $filename ];
		}
		return $filename;
	}
endif;


if ( ! function_exists( 'foundationpress_scripts' ) ) :
	function foundationpress_scripts() {
		wp_enqueue_style( 'main-stylesheet', get_stylesheet_directory_uri() . '/dist/css/' . foundationpress_asset_path( 'app.css' ), array(), '2.10.4', 'all' );
		//wp_enqueue_script('main-javascript', get_stylesheet_directory_uri() . '/dist/js/app.js', array(), ''. '');

		//Oswald font
		wp_register_style('google-fonts', 'https://fonts.googleapis.com/css?family=Oswald:200|VT323');
		wp_enqueue_style('google-fonts');

		// Deregister the jquery version bundled with WordPress.
		wp_deregister_script( 'jquery' );

		// CDN hosted jQuery placed in the header, as some plugins require that jQuery is loaded in the header.
		wp_enqueue_script( 'jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js', array(), '3.2.1', false );

		// Deregister the jquery-migrate version bundled with WordPress.
		wp_deregister_script( 'jquery-migrate' );

		//Font awesome
		wp_register_style('fontawesome', 'https://use.fontawesome.com/releases/v5.3.1/css/fontawesome.css');
		wp_register_style('fontawesome-solid', 'https://use.fontawesome.com/releases/v5.3.1/css/solid.css');
		wp_register_style('fontawesome-brands', 'https://use.fontawesome.com/releases/v5.7.2/css/brands.css');
		wp_enqueue_style('fontawesome');
		wp_enqueue_style('fontawesome-solid');
		wp_enqueue_style('fontawesome-brands');

		// Add the comment-reply library on pages where it is necessary
		if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
			wp_enqueue_script( 'comment-reply' );
		}

	}

	add_action( 'wp_enqueue_scripts', 'foundationpress_scripts' );
endif;
