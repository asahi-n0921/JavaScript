$(function() {

    var myList = [];

    function text(message) {
        myList.push(message);
        var output = "";
        for (var i in myList) {
            console.log(myList[i]);
            output += "<li>" + myList[i] + "</li>"
        }
        $("#list").html(output);
    }

    text("eat apples");

    $("#click-me").click(function(event){
        event.preventDefault();
        text("Hello World!");
    });

    $("#my-form").submit(function(event){
        event.preventDefault();
        var textInput = $("#my-input").val();
        text(textInput);
    });

});