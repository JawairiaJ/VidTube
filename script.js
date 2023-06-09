var menuIcon = document.querySelector(".menu");
var sidebar = document.querySelector(".sidebar");
var containerbanner = document.querySelector(".container-banner");


menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    containerbanner.classList.toggle("expanded-container")
}