


/* Generating navigational menu */

$('.container').prepend('<div class="sidebar navigation">');

$('.sidebar.navigation').append('<ul class="nav nav-pills nav-stacked" id="toc"></ul>');

$("h2").each(function(i) {
    var current = $(this);
    current.attr("id", "title" + i);
    $(".nav.nav-pills.nav-stacked").append("<li><a id='link" + i + "' href='#title" + i + "'class='" + current.prop("tagName") + "'>" + 
        current.html() + "</a></li>");
});

