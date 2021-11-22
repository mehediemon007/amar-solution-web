(function(){

   var navSidebarToggle = document.querySelector(".toggle-1");
   var sidebarToggle = document.querySelector(".ams-sidebar .nav-toggle");
   var sidebar = document.querySelector(".ams-sidebar");

   // Sticky Nav
   const headerContainer = document.querySelector(".ams-nav-wrapper");
   window.onscroll = ()=>{
        this.scrollY > 100 ? headerContainer.classList.add("sticky") : headerContainer.classList.remove("sticky");
   }

   navSidebarToggle.addEventListener("click",()=>{
       sidebar.classList.add("active")
   })

   sidebarToggle.addEventListener("click",()=>{
       sidebar.classList.remove("active")
   })

    var path = window.location.pathname;
    var page = path.split("/").pop();

    console.log(path);

    if(page == "index.html"){
        
        var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';

        window.onscroll = () =>{

            this.scrollY > 80 ? headerContainer.classList.add("sticky") : headerContainer.classList.remove("sticky"); 

            var percent = Math.round((h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 10);
            if(percent <=3 ){
                document.querySelector("body").style.backgroundColor = 'rgba(' + 10 + ', ' + 149 + ', ' + 249 + ', ' + '.'+ ( percent + 2 ) + ')';
            }
            else if(percent >=4 && percent <= 6){
                document.querySelector("body").style.backgroundColor = 'rgba(' + 10 + ', ' + 149 + ', ' + 249 + ', ' + '.8' + ')';
            }
            else if( percent ==8){
                document.querySelector("body").style.backgroundColor = 'rgba(' + 10 + ', ' + 149 + ', ' + 249 + ', ' + '.4'+ ')';
            }
            else if( percent ==9){
                document.querySelector("body").style.backgroundColor = 'rgba(' + 10 + ', ' + 149 + ', ' + 249 + ', ' + '.3'+ ')';
            }
            else if( percent ==10){
                document.querySelector("body").style.backgroundColor = 'rgba(' + 10 + ', ' + 149 + ', ' + 249 + ', ' + '.2'+ ')';
            }
        }    
    }

})()

;(function($){

    $(".toggle-2").click(function(){
        $(".ams-main-nav").slideToggle("100");
    })
    
    $("li.has-children > a").click(function(e){
        if(window.innerWidth <= 991){
            e.preventDefault();
        }
        $(this).next(".sub-menu").slideToggle("100")
    
    })

})(jQuery);