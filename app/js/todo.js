$(function(){ 
		$("#btn").on("click", function() {
            var text = $("#input").val();
            if (text == "") {
                alert("please enter a task!");
            } else {
                $("#input").val("");
                var task = $("<li></li>").text(text);
                //$(".rem").css({"margin-left":"10%"});
                $(task).append("<button class='rem btn btn-danger btn-sm'>X</button>");

                $("#ordered").append(task);

            }
        });

        $("body").delegate( '.rem', "click", function() {
            $(this).parent().remove();
        });
        /*
        $("body").delegate('div.li',"click",function(){
        	$(this).css({ "text-decoration": "line-through"});

        });
        */
    });