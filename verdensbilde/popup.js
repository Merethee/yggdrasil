
// NORD 
// popup rute 1
var aasgard = document.querySelector(".aasgard"); 
var popup = document.querySelector(".popup"); 

aasgard.addEventListener("click", popupRuteEn);

function popupRuteEn() {
    
    allowMapInput = false;

    if(popup.style.display !== "block") { 
        popup.style.display = "block"; 
        snakkeboble.style.display = "none"; 
    } else {
        popup.style.display = "none"; 
    }    
}    

// popup rute 2
var nextbtn = document.querySelector(".btnNext"); 
var popupto = document.querySelector(".popup-to"); 

nextbtn.addEventListener("click", popupRuteTo);

function popupRuteTo() {

    allowMapInput = false;

    if(popupto.style.display != "block") { 
        popupto.style.display = "block"; 
        popup.style.display = "none"; 
    } else {
        popupto.style.display = "none"; 
    }
}

// exit popup rute
var exit = document.querySelector(".exit-popup");
var exitpopup = document.querySelector(".popup-to"); 

exit.addEventListener("click", lukkPopup);

function lukkPopup() {

    allowMapInput = true; 
    
    if(exitpopup.style.display !== "block") { 
        exitpopup.style.display = "block"; 
    } else {
        exitpopup.style.display = "none"; 
    }
} 


//SØR 
//popup 
var helheim = document.querySelector(".hel"); 
var popuphel = document.querySelector(".popup-hel"); 

helheim.addEventListener("click", popupRuteHel);

function popupRuteHel() {
    
    allowMapInput = false;

    if(popuphel.style.display !== "block") { 
        popuphel.style.display = "block"; 
    } else {
        popuphel.style.display = "none"; 
    }    
}    

// exit popup rute
var exithel = document.querySelector(".lukk");
var exitpopuphel = document.querySelector(".popup-hel"); 

exithel.addEventListener("click", lukkPopupHel);

function lukkPopupHel() {

    allowMapInput = true; 
    
    if(exitpopuphel.style.display !== "block") { 
        exitpopuphel.style.display = "block"; 
    } else {
        exitpopuphel.style.display = "none"; 
    }
} 
