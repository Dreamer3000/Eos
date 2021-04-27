
function ChangeLower() {
    document.getElementById("Reveal").innerHTML = "Let's get cooking";
}

var element;
var Arrow;
function SelectElement(currentElement) { // takes in a clicked element
    // turn all elements white, turn selected element red
    if(currentElement.classList.contains("ReactionArrow")){
        Arrow = currentElement;
        Arrow.style.color = "red";
    }
    element = currentElement;
    let list = document.getElementsByClassName("Element");
    for(let i=0; i<list.length; i++) {
        list[i].style.color = "white";
    }
    
    element.style.color = "red"; // changes current element to be red
   
    
}

function SelectArrow(SelectedArrow) {
    Arrow = SelectedArrow
}

document.getElementById("DrawableSpace").addEventListener("click", PlaceElement) // when DrawableSpace is clicked, gets triggered
function PlaceElement(event) { // places element on canvas at mouse position
    console.log(event) // print statement in java, checks code
    if(element) { // if an element has been selected:
        let current = document.createElement('label'); // generate temporary html where the element will be placed
        current.classList.add("CanvasElement") // give 'current' the class, CanvasElement. It will inherit the css of this class
        let allowed = document.getElementById("Canvas");
        let Nav = document.getElementById("DrawableSpace");
        current.style.top =  `${event.clientY - allowed.offsetTop - Nav.offsetTop - 17.5}px`// takes the Y value event and adds it to the Y value of the start of the drawable space
        console.log(event.clientY, allowed.offsetTop)
        //console.log(event.clientY, allowed.pageYOffset)
        current.style.left = `${event.clientX - allowed.offsetLeft - 17.5}px`
        current.textContent = element.id;
        document.getElementById('DrawableSpace').appendChild(current); // put the element in DrawableSpace
    }

}

document.getElementById("DrawableSpace").addEventListener("click", Anchor);
function Anchor(event) {
    if(Arrow) {
        let current = doument.createElement("label")
        let allowed = document.getElementById("Canvas")
        let Nav = document.getElementById("DrawableSpace")
        var AnchorX =  `${event.clientY - allowed.offsetTop - Nav.offsetTop - 17.5}px`
        var AnchorY = `${event.clientX - allowed.offsetLeft - 17.5}px`
    }
}

document.getElementById("DrawableSpace").addEventListener("click", DrawArrow);
function DrawArrow(event) {
    if(Arrow) {
        let Arrow = document.getElementById("ReactionArrow");
        let current = document.createElement('label');
        current.classList.add("CanvasElement");
        let allowed = document.getElementById("Canvas")

    }
}