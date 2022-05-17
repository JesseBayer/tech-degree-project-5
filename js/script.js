let userInput = document.getElementById("search"); 

// userInput.addEventListener("keyup", searchFunction); 

function searchFunction() {
    var i = document.getElementById("search");
    i.value = i.value.toLowerCase();


    let image = document.querySelector(".container").children;

    for (i = 0; i < image.length; i++) {
        if (image[i].getAttribute("data-caption").toLowerCase().includes(userInput)) {
            image[i].style.display = "";
        }
            else {
                image[i].style.display = "hidden";
            }
        }
    }

    userInput.addEventListener("keyup", searchFunction); 