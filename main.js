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
    
});

