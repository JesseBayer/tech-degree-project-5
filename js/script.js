let userInput = document.getElementById("search"); 

userInput.addEventListener("keyup", searchFunction); 

function searchFunction() {
    var i = document.getElementById("search");
    i.value = i.value.toLowerCase();
    console.log("search");

    let images = document.querySelector(".container").children;

    for (i = 0; i < images.length; i++) {
        if (images.getAttribute("data-caption").toLowerCase().includes(userInput)) {
            images.style.display = "none";
        }
            else {
                images.style.display = "hidden";
            }
        }
    }

