var verden = document.querySelector(".verden");
var snakkeboble = document.querySelector(".snakkeboble");
var header = document.querySelector(".header");
var tidslinjeBtn = document.querySelector(".til-tidslinje"); 
var animate = document.querySelector(".animate"); 
var zoomTop = document.querySelector(".zoom-top");
var zoomBot = document.querySelector(".zoom-bottom");

var zoomState = "map";
var allowMapInput = true;


//snakkeboble intro
if(snakkeboble.style.display !== "block") { 
    snakkeboble.style.display = "block"; 
} else {
    snakkeboble.style.display = "none"; 
}    

// animasjon på løse elementer 
animate.classList.add("float"); 


// zoom på illustrasjonen
var treet = document.querySelector(".yggdrasil");
treet.addEventListener("click", function (event) {
    zoomMap('zoom-inn-nord');
});

var hel = document.querySelector(".helheim");
hel.addEventListener("click", function (event) {
    zoomMap('zoom-inn-sør');
});


function zoomMap(position){
    console.log(position);  
    if(allowMapInput) {
        if(zoomState == "map") {
            // zoom in
            verden.classList.add(position);
            zoomState = "";

            zoomTop.innerHTML = "Tilbake"; 
            zoomBot.innerHTML = "Tilbake"; 
            snakkeboble.style.display = "none"; 
            tidslinjeBtn.style.display = "none"; 

            header.classList.add("hide");
            header.classList.remove("show"); 
            animate.classList.remove("float"); 
         

        } else {
            // zoom out
            verden.classList.remove('zoom-inn-nord');
            verden.classList.remove('zoom-inn-sør');
            zoomState = "map";
            allowMapInput = true; 

            zoomTop.innerHTML = "Zoom inn"; 
            zoomBot.innerHTML = "Zoom inn"; 
            tidslinjeBtn.style.display = "block"; 
            header.style.display = "block";
            verden.style.transition = "1s ease-in-out";

            header.classList.add("show");
            animate.classList.add("float"); 
            header.classList.remove("hide"); 
        }
    }
}
