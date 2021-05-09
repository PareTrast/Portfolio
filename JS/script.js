//JavaScript File
$(document).ready(function() {
    $("#tite").show()
});
$(document).ready(function() {
    $("#dark").click(function() {
        $("body").css({
            'background-color': 'black',
            'color': 'white'

        });
        $("#title").css({
            'color': 'white'
        });

        $("#git").css({
            'color': 'white'
        })
        $("#email").css({
            'color': 'white'
        })
    });
});

$(document).ready(function() {
    $("#light").click(function() {
        $("body").css({
            'background-color': 'white',
            'color': 'black'
        });
        $("#title").css({
            'color': "black"
        })

        $("#git").css({
            'color': 'black'
        })
        $("#email").css({
            'color': 'black'
        })
    });
});