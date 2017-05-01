jQuery( document ).ready(function ( $ ) {
 
    var body = $('body'),
      siteNav = $('.site-nav'),
      searchForm = $('.search-form'),
      sortForm = $('.sort-form'),
      searchField = $('.search-field'),
      menuIcon = $('#menu-icon'),
      closeIcon = $('#close-icon'),
      searchIcon = $('#search-icon'),
      sortIcon = $('#sort-icon');

    if (body.hasClass('search-results')) {
      sortForm.hide();
      sortIcon.hide();
    }

    function toggleSiteNav() {
      if (sortForm.hasClass('sort-form--is-visible')) {
        toggleSort();
      } else if (searchForm.hasClass('search-form--is-visible')) {
        toggleSearch();
      }
      siteNav.toggleClass('site-nav--is-visible');
      menuIcon.toggleClass('menu-icon--is-visible');
      closeIcon.toggleClass('close-icon--is-visible');
      searchIcon.toggle();
      if (!body.hasClass('search-results')){
        sortIcon.toggle();
      }
    }

    function toggleSearch() {
      if (sortForm.hasClass('sort-form--is-visible')) {
        toggleSort();
      };
      searchForm.toggleClass('search-form--is-visible');
      searchField.focus();
    }

    function toggleSort() {
      if (searchForm.hasClass('search-form--is-visible')) {
        toggleSearch();
      };
      sortForm.toggleClass('sort-form--is-visible');
    }

    menuIcon.on('click', toggleSiteNav);
    closeIcon.on('click', toggleSiteNav);
    searchIcon.on('click', toggleSearch);
    sortIcon.on('click', toggleSort);

});
