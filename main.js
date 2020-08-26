$(document).ready(function() {

    $('#sec-1-01').click(function() {
        $("#sec-1-01").addClass("animate__zoomOut").delay(1000).queue(function(next){
            next();
            $('#sec-1-02').removeClass('hide');
        });
        console.log('foo');
       });
    $('#sec-1-02').click(function() {
        $("#sec-1-02").addClass("animate__zoomOut").delay(1000).queue(function(next){
            next();
            $('#sec-1-03').removeClass('hide');
        });
       });
    
    $("#btn-1").click(function() {
        $('.container').animate({
            scrollTop: $("#sec-3").offset().top
        }, 1000);
        $("#sec-3-01").removeClass("hide");
        $('#sec-3-01').click(function() {
        $("#sec-3-01").addClass("animate__zoomOut").delay(1000).queue(function(next){
            next();
            $('#sec-3-02').removeClass('hide');
        });
        console.log('foo');
       });
        $('#sec-3-02').click(function() {
            $("#sec-3-02").addClass("animate__zoomOut").delay(1000).queue(function(next){
                next();
                $('#sec-3-03').removeClass('hide');
            });
        });
    });

    // $("#btn-2").click(function() {
    //     $('.container').animate({
    //         scrollTop: $("#sec-3").offset().top
    //     }, 1000);
    //     console.log('btn2');
    //     $("#sec-3-01").removeClass("hide");
    //     $('#sec-3-01').click(function() {
    //     $("#sec-3-01").addClass("animate__zoomOut").delay(1000).queue(function(next){
    //         next();
    //         $('#sec-3-02').removeClass('hide');
    //     });
    //     console.log('foo');
    //    });
    //     $('#sec-3-02').click(function() {
    //         $("#sec-3-02").addClass("animate__zoomOut").delay(1000).queue(function(next){
    //             next();
    //             $('#sec-3-03').removeClass('hide');
    //         });
    //     });
    // });

    $("#btn-3").click(function() {
        $('.container').animate({
            scrollTop: $("#sec-5").offset().top
        }, 800);
        console.log('asd');
        $("#sec-4-01").removeClass("hide");
        $('#sec-4-01').click(function() {
        $("#sec-4-01").addClass("animate__zoomOut").delay(1000).queue(function(next){
            next();
            $('#sec-4-02').removeClass('hide');
        });
        console.log('foo');
       });
        $('#sec-4-02').click(function() {
            $("#sec-4-02").addClass("animate__zoomOut").delay(1000).queue(function(next){
                next();
                $('#sec-4-03').removeClass('hide');
            });
        });
    });

    $("#btn-4").click(function() {
        $(".container").animate({ scrollTop: $('.container').prop("scrollHeight")}, 1000);
        console.log('asd');
        $("#sec-5-01").removeClass("hide");
    });

    
    
});

