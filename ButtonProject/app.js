// click functionality

// select the first element with the .open or .closed class
const closedFace = document.querySelector(".closed")
const openFace = document.querySelector(".open")

// tells you what you're selecting

// Add event listeners

// if the closedFace emoji is clicked, add the active class to the openFace emoji
// and remove it from the closedFace emoji

// if the openFace emoji is clicked, add the active class to the closedFace emoji
// and remove it from the openFace emoji

// it works by adding the active class to the emoji that is clicked and removing it from the other one
closedFace.addEventListener("click", () => {
    // on click on the closed face emoji:

    // if the closed face emoji has the class "closed" (which it does), add the class "active" to the open face emoji
    if(openFace.classList.contains("open")){
        openFace.classList.add("active");
        closedFace.classList.remove("active");
    }
});

openFace.addEventListener("click", () => {
    if(closedFace.classList.contains("closed")){
        closedFace.classList.add("active");
        openFace.classList.remove("active");
    }

    // at this point the button is clicked, so if you want things to show up
    // put them here
})