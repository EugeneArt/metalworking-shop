$(document).ready(function(){
    // REQUEST
    $(".menu__item--phone").click( function() {
        $(".request").css("display","block");
        $(".request-form").css("display","block");
        $(".request__close").click( function() {
            $(this).parent().css("display","none");
        });
    });
    
    
    // SCROLL
    $(".menu a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $("html,body").animate({scrollTop: destination}, 1100);
    });
    //REQUEST CONTENT
    $(".content__description--button").click(function(){
        $(this).parents(".container").find(".content__specification").css("display","block");
        var $g = $(this);
        $(this).hide();
        
        $(".content__specification img").click(function(){
             $(this).parent().css("display","none");
                $g.show();
        });
        
    });
    //REQUST EQUIPMENT
    $(".equipment__item--description").hover(
        function(){
            $(this).css("background-color","#1e222f");
            $(this).children(".equipment__item--icon").css("background-color","#bf1927");
        },
        function(){
            $(this).css("background-color","#bf1927");
            $(this).children(".equipment__item--icon").css("background-color","#1e222f");
            
        }
    );
    $(".equipment__item--description").click(function(){
        var $closes = $(this).next();
         $closes.css("display","flex");
        
        $(".equipment-specification-definition img").click(function(){
             $closes.css("display","none");
        });
    });
});
// VALIDATE FORM
function showError(container){
    container.className="error";
}
function resetError(container){
    container.className="";
}
function validate(form){
    var element = form.elements;
    for(var i = 0; i< element.length-1; i++){
        resetError(element[i].parentNode);
        if (!element[i].value){
            showError(element[i].parentNode);
        }
    }
}
