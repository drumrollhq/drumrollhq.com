/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    'use strict';

    var $doc = $(document);

    $doc.ready(function() {

        $('.post-content').fitVids();

    });

    var $nav = $('header nav');
    $('header nav .menu').on('click', function() {
      $nav.toggleClass('expanded');
    });

    var $logo = $('.blog-logo img'),
      logos = ['/assets/img/logo-l.png', '/assets/img/logo-r.png'];

    $doc.on('scroll', function() {
      var t = Math.floor($doc.scrollTop() / 10) % 2;
      $logo.attr('src', logos[t]);
    });

}(jQuery));
