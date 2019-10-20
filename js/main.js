$(document).ready(function(){
    
    $('section.gallery-item').click(function(){
        console.log("!$(this).children().hasClass('gallery-item-content-visible')"+$(this).children().hasClass('gallery-item-content-visible'));
        console.log("class "+$(this).children().attr("class"))
        if(!$(this).children().hasClass('gallery-item-content-visible')){
            $('section.gallery-item div').removeClass('gallery-item-content-visible'); 
            $(this).children().addClass('gallery-item-content-visible');
        }else{
            $('section.gallery-item div').removeClass('gallery-item-content-visible'); 
        }
        
    })


    
    $('#companies ul').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true
      });
});

