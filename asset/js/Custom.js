$(document).ready(function () {
    

    $(".modal-trigger").click(function (e) { 
        
        var dataModal=$(this).attr("data-modal");
        
        $("#"+dataModal).css({
            "display":"block"
        });

    });


    $(".close-modal,.modal-sandbox").click(function (e) { 
        
        $(".modal").fadeOut(300);
        
    });
});