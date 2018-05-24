$(document).ready(function() {

    //global variables
    var number = 60;
    var intervalId;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    //start countdown
    function run () {
        intervalId = setInterval(decrement, 1000);
    }

    //hide questions and other contents
    $(window).on("load", hide);

    $("#start").on('click', function () {
        $(this).hide();
        show();
        run();
    });

    $("#finish").on('click', function () {
        $("#start").hide();
        $("#results").show(); //not actually sure if this does anything
        hide();
        results();
        stop();
    });

    function results () {
        var finished = $("<h2>").html("You're finished!");
        var correctA = $("<p>").html("Correct Answers: " + correct);
        var incorrectA = $("<p>").html("Incorrect Answers: " + incorrect);
        var unansweredA = $("<p>").html("Unaswered: " + unanswered);
        var newClass = $('body').append('<div>');
            newClass.append(finished);
            newClass.append(correctA);
            newClass.append(incorrectA);
            newClass.append(unansweredA);
            
            // $("#results").append(newClass);
            console.log(newClass);
           
    };

    function decrement () {
        //decrease number by 1
        number--;

        //show number
        $("#timer").html(" " + number + " seconds");

        //number hits 1
        if (number === 1) {
            $("#timer").html(" " + number + " second");
        } 
        //number hits 0
        else if (number === 0) {
            $("#start").hide();
            hide();
            results();
            stop();
        }
    };

    function stop () {
        clearInterval(intervalId);
    };

    function hide () {
        $(".form-group").hide();
        $("#time").hide();
        $("#finish").hide();
        $("#results").hide(); //same here
    };

    function show() {
        $(".form-group").show();
        $("#time").show();
        $("#finish").show();
        $("#results").show(); //and here
    };

    //calculate correct/incorrect answers when a change occurs
    $("input[type=radio]").on("change", function () {
        correct = $("input[value=correct]:checked").length;
        incorrect = $("input[value=incorrect]:checked").length;
        unanswered = (6-(correct + incorrect));
    });
}); //document.ready

