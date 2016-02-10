// работа со слайдером
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
    
    // Работа с сервисами
    
    var btn_delivery = document.getElementById("btn_delivery");
    var btn_guarantee = document.getElementById("btn_guarantee");
    var btn_credit = document.getElementById("btn_credit");
	
	btn_delivery.addEventListener("click", function(){

		btn_guarantee.classList.remove("btn__service--active");
		btn_delivery.classList.add("btn__service--active");
		btn_credit.classList.remove("btn__service--active");
		
		document.querySelector(".service__about:nth-of-type(2)").style.display = "block";
		document.querySelector(".service__about:nth-of-type(3)").style.display = "none";
		document.querySelector(".service__about:nth-of-type(4)").style.display = "none";
		

	});  
    
    btn_guarantee.addEventListener("click", function(){
       
        btn_guarantee.classList.add("btn__service--active");
        btn_delivery.classList.remove("btn__service--active");
        btn_credit.classList.remove("btn__service--active");
		
		document.querySelector(".service__about:nth-of-type(2)").style.display = "none";
		document.querySelector(".service__about:nth-of-type(3)").style.display = "block";
		document.querySelector(".service__about:nth-of-type(4)").style.display = "none";		
        
    });    
	
	btn_credit.addEventListener("click", function(){

		btn_guarantee.classList.remove("btn__service--active");
		btn_delivery.classList.remove("btn__service--active");
		btn_credit.classList.add("btn__service--active");
		
		document.querySelector(".service__about:nth-of-type(2)").style.display = "none";
		document.querySelector(".service__about:nth-of-type(3)").style.display = "none";
		document.querySelector(".service__about:nth-of-type(4)").style.display = "block";		

	}); 	
   
    
    // Показать карту
    var map_show = document.getElementById("map_show");
    var map_close = document.getElementById("map_close");

    map_show.addEventListener("click", function(){

        var map = document.querySelector(".information__map--hover");

        map_close.style.display = "block";
        map.style.display = "block";    

    });



    // Закрыть карту при клике на значке
    map_close.addEventListener("click", function(){

        var map = document.querySelector(".information__map--hover");

        map_close.style.display = "none";
        map.style.display = "none";

    });    
    
    // Открыть окно для отзыва
    
    var about = document.querySelector("#about");    
    var about_close = document.querySelector("#about_close");
    var frm_about = document.querySelector(".about");
        
    about.addEventListener("click", function(){
        
        frm_about.style.display = "block";  
        about_close.style.display = "block";
        
    });
    
    // ОТправить отзыв
    
    var sbm_send_message = document.querySelector("#sbm_send_message");
    var about_name = document.querySelector("#about_name");
    var about_email = document.querySelector("#about_email");
    var about_message = document.querySelector("#about_message");
    
    sbm_send_message.addEventListener("click", function(){
       
        console.log("Ваше имя "+ about_name.value);
        console.log("Ваше e-mail "+about_email.value);
        console.log("Текст письма"+about_email.value);
        
    });
    
    // Закрыть окно отзыва
    
    about_close.addEventListener("click", function(){

        var map = document.querySelector(".information__map--hover");

        about_close.style.display = "none";
        frm_about.style.display = "none";

    });  
    
}




// работа со слайдером цен

function catalog(){

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
    
   
    
    var goods_buy = document.querySelector("#goods_buy");
    var basket_dialog = document.querySelector(".basket-dialog");
    var basket_dialog_close = document.querySelector("#basket_dialog_close");
    
     // Отобразить окно добавления в корзину
    
    goods_buy.addEventListener("click", function(){
        
       basket_dialog.style.display = "block";
       basket_dialog_close.style.display = "block";
        
    });
        
    
    // Закрыть окно добавления в корзину
    
    basket_dialog_close.addEventListener("click", function(){
        
       basket_dialog.style.display = "none";
       basket_dialog_close.style.display = "none";
        
    }); 

}
