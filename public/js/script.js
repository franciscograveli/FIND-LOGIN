$(document).ready(()=>{
    
    $('.form-container').on('mouseover',()=>{

        $('h1').css({'color':'var(--primary)','transition': '1s'});

    });
    $('.form-container').on('mouseout',()=>{

        $('h1').css({'color':'var(--bg-color2)','transition': '1s'});

    });
   
});
   

