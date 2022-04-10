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

    if(page == "index.html" || path == "/amar-solution-web/"){
        
        var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';

        window.onscroll = () =>{

            this.scrollY > 80 ? headerContainer.classList.add("sticky") : headerContainer.classList.remove("sticky"); 

            var percent = Math.round((h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 10);
            if(percent ==1 ){
                document.querySelector("body").style.backgroundColor = 'rgba(' + 10 + ', ' + 149 + ', ' + 249 + ', ' + '.15' + ')';
            }
            else if(percent >=3 && percent <= 6){
                document.querySelector("body").style.backgroundColor = 'rgba(' + 10 + ', ' + 149 + ', ' + 249 + ', ' + '.5' + ')';
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

    // Single Product Slider

    jQuery(document).ready(function() {
        var productPreview = jQuery(".product-preview");
        var productThumb = jQuery(".product-thumb");
        var slidesPerPage = 4; //globaly define number of elements per page
        var syncedSecondary = true;
    
        productPreview.owlCarousel({
            items: 1,
            slideSpeed: 3000,
            nav: false,
            animateIn: "fadeIn",
            autoplayHoverPause: true,
            autoplaySpeed: 1400,
            dots: false,
            loop: true,
            responsiveRefreshRate: 200,

        }).on("changed.owl.carousel", syncPosition);
    
        productThumb.on("initialized.owl.carousel", function() {

            productThumb .find(".owl-item").eq(0).addClass("current");

        }).owlCarousel({
            items: slidesPerPage,
            dots: true,
            nav: true,
            margin:16,
            smartSpeed: 1000,
            slideSpeed: 1000,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100,
            navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],

        }).on("changed.owl.carousel", syncPosition2);
    
        function syncPosition(el) {
          //if you set loop to false, you have to restore this next line
          //var current = el.item.index;
    
          //if you disable loop you have to comment this block
          var count = el.item.count - 1;
          var current = Math.round(el.item.index - el.item.count / 2 - 0.5);
    
          if (current < 0) {
            current = count;
          }
          if (current > count) {
            current = 0;
          }
    
          //end block
    
          productThumb
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
          var onscreen = productThumb.find(".owl-item.active").length - 1;
          var start = productThumb
          .find(".owl-item.active")
          .first()
          .index();
          var end = productThumb
          .find(".owl-item.active")
          .last()
          .index();
    
          if (current > end) {
            productThumb.data("owl.carousel").to(current, 100, true);
          }
          if (current < start) {
            productThumb.data("owl.carousel").to(current - onscreen, 100, true);
          }
        }
    
        function syncPosition2(el) {
          if (syncedSecondary) {
            var number = el.item.index;
            productPreview.data("owl.carousel").to(number, 100, true);
          }
        }
    
        productThumb.on("click", ".owl-item", function(e) {
          e.preventDefault();
          var number = jQuery(this).index();
          productPreview.data("owl.carousel").to(number, 300, true);
        });

      });

})()

;(function($){

   if($(".ams-reviews").length){
     $(".ams-reviews").owlCarousel({
       items:1,
       nav:true,
       navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
     })
   }

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

AOS.init();