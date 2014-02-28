/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
  'use strict';

  FastClick.attach(document.body);

  var $doc = $(document),
    $nav = $('header.site-head nav'),
    $navParts = $('.site-head nav, .site-head nav > ul'),
    $header = $('header.site-head'),
    $navLogo = $nav.find('.logo'),
    headerFixed = $nav.hasClass('fixed'),
    isHome = $(document.body).hasClass('home');

  $doc.ready(function() {

      $('.post-content').fitVids();

  });

  var navExpanded = false;
  $('header nav .menu').on('click', function() {
    if (navExpanded) {
      $navParts.css('height', '');
      navExpanded = false;
    } else {
      var initHeight = $navParts.height();
      $navParts.css('height', 'auto');
      var targetHeight = $navParts.height();
      $navParts.css('height', '');
      setTimeout(function() {
        $navParts.height(targetHeight);
      }, 0);
      navExpanded = true;
    }
  });

  $('header nav li:not(.menu)').on('click', function() {
    $navParts.css('height', '');
    navExpanded = false;
  });

  var $logo = $('.blog-logo img'),
    logos = ['/assets/img/logo-l.png', '/assets/img/logo-r.png'];

  if (isHome) {
    $doc.on('scroll', function() {
      var scroll = $doc.scrollTop();

      $logo.attr('src', logos[Math.floor(scroll / 20) % 2]);

      // Fixed stuff:
      if ($header.outerHeight() - 50 < scroll) {
        if (!headerFixed) {
          $nav.addClass('fixed');
          setTimeout(function() {
            $navLogo.addClass('active');
          }, 100);
          headerFixed = true;
        }
      } else {
        if (headerFixed) {
          $nav.removeClass('fixed');
          setTimeout(function() {
            $navLogo.removeClass('active');
          }, 100);
          headerFixed = false;
        }
      }
    }).trigger('scroll');
  }
}(jQuery));
