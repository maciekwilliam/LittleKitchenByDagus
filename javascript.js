$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.arrow').fadeIn();
        } else {
            $('.arrow').fadeOut();
        }
    });

    $('.arrow').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
    });

});
//pokazywanie i ukrywanie elementów (przepis i składniki)
$("document").ready(
    function()
    {
        $("div.pokaz span").each(
            function(i)
            {
                $(this).addClass("gh"+i);
            }
        );

        $("div.ukryj").each(
            function(i)
            {
                $(this).addClass("gh"+i);
            }
        );


        $("div.pokaz span").click(
            function()
            {
                $("div."+$(this).attr("class")).toggle();
            }
        );
    }
);