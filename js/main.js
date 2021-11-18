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

})()



$(".toggle-2").click(function(){
    $(".ams-main-nav").slideToggle("100");
})

$("li.has-children > a").click(function(e){
    e.preventDefault();
    $(this).next(".sub-menu").slideToggle("100")

})