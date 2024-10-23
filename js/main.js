$(document).ready(function () {

    $("#animateButton").click(function () {

        $("#square").animate({
            left: '+=100px',
            width: '100px',
            height: '100px'
        }, 3000, function () {

            $(this).animate({
                backgroundColor: "blue"
            }, 5000, function () {

                $(this).html("<h2 style='color: white; text-align: center;'>Animacja zakończona</h2>");
            });
        });
    });
});