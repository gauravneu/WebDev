"use strict";
(function() {
    const dropdown= document.querySelector(".menuoption");
    dropdown.addEventListener("click", function(){
        dropdown.classList.toggle("active");
        });
})();