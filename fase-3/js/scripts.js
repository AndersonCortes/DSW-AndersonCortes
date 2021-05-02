/*!
    * Start Bootstrap - SB Admin v6.0.2 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
(function ($) {
    "use strict";

    // Add active state to sidbar nav links
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
    $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function () {
        if (this.href === path) {
            $(this).addClass("active");
        }
    });

    // Toggle the side navigation
    $("#sidebarToggle").on("click", function (e) {
        e.preventDefault();
        $("body").toggleClass("sb-sidenav-toggled");
    });
})(jQuery);

$("#btn-inicio").click(function () {

    $("#cargue").load('./page/inicio.html');

});
                            
$("#btn-tema1").click(function () {

    $("#cargue").load('./page/tema1.html');
});

$("#btn-tema2").click(function()    {

 $("#cargue").load('./page/tema2.html');
});

$("#btn-recurso1").click(function()    {

    $("#cargue").load('./page/recurso1.html');

});