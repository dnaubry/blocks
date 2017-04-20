jQuery( document ).ready(function ( $ ) {
 
    var siteNav = $('.site-nav'),
<<<<<<< HEAD
      searchForm = $('.search-form'),
      sortForm = $('.sort-form'),
=======
      searchForm = $('.search'),
      sortForm = $('.sort'),
>>>>>>> d8d4eb6fcbd750a3222f74241ad9916aca4e0b8e
      menuIcon = $('#menu-icon'),
      closeIcon = $('#close-icon'),
      searchIcon = $('#search-icon'),
      sortIcon = $('#sort-icon');

    function toggleSiteNav() {
<<<<<<< HEAD
      if (sortForm.hasClass('sort-form--is-visible')) {
        toggleSort();
      } else if (searchForm.hasClass('search-form--is-visible')) {
=======
      if (sortForm.hasClass('sort--is-visible')) {
        toggleSort();
      } else if (searchForm.hasClass('search--is-visible')) {
>>>>>>> d8d4eb6fcbd750a3222f74241ad9916aca4e0b8e
        toggleSearch();
      }
      siteNav.toggleClass('site-nav--is-visible');
      menuIcon.toggleClass('menu-icon--is-visible');
      closeIcon.toggleClass('close-icon--is-visible');
    }

    function toggleSearch() {
<<<<<<< HEAD
      if (sortForm.hasClass('sort-form--is-visible')) {
        toggleSort();
      };
      searchForm.toggleClass('search-form--is-visible');
    }

    function toggleSort() {
      if (searchForm.hasClass('search-form--is-visible')) {
        toggleSearch();
      };
      sortForm.toggleClass('sort-form--is-visible');
=======
      if (sortForm.hasClass('sort--is-visible')) {
        toggleSort();
      };
      searchForm.toggleClass('search--is-visible');
    }

    function toggleSort() {
      if (searchForm.hasClass('search--is-visible')) {
        toggleSearch();
      };
      sortForm.toggleClass('sort--is-visible');
>>>>>>> d8d4eb6fcbd750a3222f74241ad9916aca4e0b8e
    }

    menuIcon.on('click', toggleSiteNav);
    closeIcon.on('click', toggleSiteNav);
    searchIcon.on('click', toggleSearch);
    sortIcon.on('click', toggleSort);

});
