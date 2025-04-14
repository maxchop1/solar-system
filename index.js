
// your code goes here

$(window).load(function(){
 
    var body = $("body"),

        universe = $("#universe"),

        solarsys = $("#solar-system");
 
    var init = function() {

        body.removeClass('view-2D opening').addClass("view-3D").delay(2000).queue(function() {

            $(this).removeClass('hide-UI').addClass("set-speed");

            $(this).dequeue();

        });

    };
 
    var setView = function(view) { universe.removeClass().addClass(view); };
 
    $("#toggle-data").click(function(e) {

        body.toggleClass("data-open data-close");

        e.preventDefault();

    });
 
    $("#toggle-controls").click(function(e) {

        body.toggleClass("controls-open controls-close");

        e.preventDefault();

    });
 
    $("#data a").click(function(e) {

        var ref = $(this).attr("class");

        solarsys.removeClass().addClass(ref);

        $(this).parent().find('a').removeClass('active');

        $(this).addClass('active');

        e.preventDefault();

    });
 
    $(".set-view").click(function() { body.toggleClass("view-3D view-2D"); });

    $(".set-zoom").click(function() { body.toggleClass("zoom-large zoom-close"); });

    $(".set-speed").click(function() { setView("scale-stretched set-speed"); });

    $(".set-size").click(function() { setView("scale-s set-size"); });

    $(".set-distance").click(function() { setView("scale-d set-distance"); });
 
    init();

    $(document).ready(function () {

        var solarSound = document.getElementById('solarSound');

        var isPlaying = false;

        var isBlackHoleActive = false;
 
        // Play the audio when the "Start/Stop" button is clicked

        $("#startStopButton").click(function () {

            if (isPlaying) {

                solarSound.pause(); // Pause the audio

                isPlaying = false;

            } else {

                solarSound.currentTime = 0; // Reset the audio to the beginning

                solarSound.play(); // Play the audio

                isPlaying = true;

            }

        });

        $("#blackHoleButton").click(function () {

        if (isBlackHoleActive) {

            $("#blackhole").remove();  // Remove black hole

            $("#solar-system").show(); // Show solar system

            $(this).text("Activate Black Hole");

            isBlackHoleActive = false;

        } else {

            $("#solar-system").hide(); // Hide the solar system

            if ($("#blackhole").length === 0) {

                $("#universe").append('<div id="blackhole"></div>'); // Create black hole

            }

            $("#blackhole").show();

            $(this).text("Deactivate Black Hole");

            isBlackHoleActive = true;

        }

    });

    });

});
