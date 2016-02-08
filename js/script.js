function slider(){
    
    var i = 0;
    
    var slider1 = document.getElementById("slider1");
    var slider2 = document.getElementById("slider2");
    
    var control1 = document.getElementById("control1");
    var control2 = document.getElementById("control2");
    
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    
    control1.addEventListener("click", function(){
        
        slider2.style.display = "none";
        slider1.style.display = "block";        
        i = 0;
        
        
    });
    
    control2.addEventListener("click", function(){
        
        slider1.style.display = "none";
        slider2.style.display = "block";       
        i = 1;
        
    });
    
    prev.addEventListener("click", function(){
        
        if(!i){
        
            slider2.style.display = "block";
            slider1.style.display = "none";
            control1.checked = true;
            
            i++;
        }
        else{
            
            slider1.style.display = "block";
            slider2.style.display = "none";
            control2.checked = true;
            i = 0;           
            
        }
        
        
    });
    
    next.addEventListener("click", function(){
        
        
        
        if(!i){
        
            slider2.style.display = "block";
            slider1.style.display = "none";
            control1.checked = true;
            
            i++;
        }
        else{
            
            slider1.style.display = "block";
            slider2.style.display = "none";
            control2.checked = true;
            i = 0;           
            
        }
        
    });
    
}


function price_slider(){

    var disc_min = document.getElementById("disc_min");
    var disc_max = document.getElementById("disc_max");


    var point_min = document.getElementById("point_min");
    var point_max = document.getElementById("point_max");


    var interval = document.querySelector(".slider-price");

    var line_active = document.getElementById("line_active");


    var price_min = document.getElementById("price_min");
    var price_max = document.getElementById("price_max");


    var min_value = disc_min.offsetLeft;
    var max_value = disc_max.offsetLeft;

    disc_min.onmousedown = function(e){

        disc_min.ondragstart = function(){

            return false; 

        };

        moveAt(e);

        function moveAt(e){ 
          
            var i = e.clientX - interval.offsetLeft - 9;
            var cost = i - 21;

            if(i >= 21 && i < (disc_max.offsetLeft)){

                disc_min.style.left =  i + "px"; // перемещаем диск
                point_min.style.left =  (i + 9) + "px"; // перемещаем и центруем точку           
                price_min.value = cost * 223; // указываем стоимость
                line_active.style.left = i + "px";  // красим выбранную зону
                line_active.style.width = disc_max.offsetLeft - i + "px"; // определяем длину выделеной зоны

            }                

        }

        document.onmousemove = function(e){

            moveAt(e);

        };

        disc_min.onmouseup = function(){

            document.onmousemove = null;
            disc_min.onmouseup = null;

        };


    };


    disc_max.onmousedown = function(e){

        disc_max.ondragstart = function(){

            return false; 

        };

        moveAt(e);

        function moveAt(e){

            //var i = e.clientX - 233;       
            var i = e.clientX - interval.offsetLeft - 9;
            var cost = i - 21;

            if(i <= 190 &&  i > (disc_min.offsetLeft)){

                disc_max.style.left =  i + "px"; // перемещаем диск
                point_max.style.left =  (i + 9) + "px"; // перемещаем и центруем точку   

                price_max.value = cost * 223; // указываем стоимость

                line_active.style.left =  disc_min.offsetLeft;  // красим выбранную зону            

                line_active.style.width =  i - disc_min.offsetLeft + "px"; // определяем длину выделеной зоны

            }                

        }

        document.onmousemove = function(e){

            moveAt(e);

        };

        disc_max.onmouseup = function(){

            document.onmousemove = null;
            disc_max.onmouseup = null;

        };
        
    };


}
