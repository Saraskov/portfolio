// JavaScript Document
 var heading = document.querySelector("h1");
                var data = ["<h1>Hej jeg er Sara</h1>","<h1>Velkommen til mit portfolio</h1>","<p>Multimediestuderende</p>","<p> Interesseret i kodning og design</p>"];
                var j = 0;
                var i = 0;
    

            var k;

            function typing(){
                if(heading.innerHTML.length === data[j].length){
                    k = 0;
                    setTimeout(del, 1200);
                }
                if(i<data[j].length){
                    heading.innerHTML += data[j].charAt(i);
                    i++;
                    setTimeout(typing, 50);
                }
                else{
                    j++;
                    i = 0;
                    k = 0;
                    setTimeout(typing, 3000);
                }
                if(j === data.length){
                    j = 0;
                }
            }
                
            // var check = document.getElementById("check");
            // var k = 0;
            function del(){
                if(heading.innerHTML.length == 0){
                    clearTimeout(time);
                }
                else{
                heading.innerHTML = heading.innerHTML.slice(0, heading.innerHTML.length - k);
                k++;
                var time = setTimeout(del, 100);
                }
            }

            typing();


//Javascript for the image gallery navgation
//Copied from a Bootstrap snippet example
//https://bootsnipp.com/snippets/GzKKE

		$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});