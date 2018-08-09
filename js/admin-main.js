$(document).ready(function () {
    $('.sidebar-trigger').on('click', function (e) {
       e.preventDefault();

       var adminSidebar = $('.admin-sidebar');
       var adminContainer = $('.admin-container');

       if(adminSidebar.hasClass('sidebar-sm')) {
           adminSidebar.removeClass('sidebar-sm');
           adminContainer.removeClass('container-sm');
       } else {
           adminSidebar.addClass('sidebar-sm');
           adminContainer.addClass('container-sm');
       }
    });

    if ($(window).width() < 1200) {
        $('.sidebar-trigger').click();
    }
});