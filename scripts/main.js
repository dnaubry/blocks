jQuery( document ).ready(function ( $ ) {
 
    var siteNav = $('.site-nav'),
      searchForm = $('.search'),
      sortForm = $('.sort'),
      menuIcon = $('#menu-icon'),
      closeIcon = $('#close-icon'),
      searchIcon = $('#search-icon'),
      sortIcon = $('#sort-icon');

    function toggleSiteNav() {
      if (sortForm.hasClass('sort--is-visible')) {
        toggleSort();
      } else if (searchForm.hasClass('search--is-visible')) {
        toggleSearch();
      }
      siteNav.toggleClass('site-nav--is-visible');
      menuIcon.toggleClass('menu-icon--is-visible');
      closeIcon.toggleClass('close-icon--is-visible');
    }

    function toggleSearch() {
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
    }

    menuIcon.on('click', toggleSiteNav);
    closeIcon.on('click', toggleSiteNav);
    searchIcon.on('click', toggleSearch);
    sortIcon.on('click', toggleSort);

});
