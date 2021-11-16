(function(){

   var navToggle = document.querySelector(".nav-toggle");
   var sidebarToggle = document.querySelector(".ams-sidebar .nav-toggle");
   var sidebar = document.querySelector(".ams-sidebar");

   // Sticky Nav
   const headerContainer = document.querySelector(".ams-nav-wrapper");
   window.onscroll = ()=>{
        this.scrollY > 100 ? headerContainer.classList.add("sticky") : headerContainer.classList.remove("sticky");
   }

   navToggle.addEventListener("click",()=>{
       sidebar.classList.add("active")
   })

   sidebarToggle.addEventListener("click",()=>{
       sidebar.classList.remove("active")
   })

})()