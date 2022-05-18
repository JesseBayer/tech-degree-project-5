//Asigns the input from the search bar to userInput
let userInput = document.getElementById("search"); 

function searchFunction() {

    //Sets the value of userInput to userSearch and sets it to lower case
    let userSearch = userInput.value.toLowerCase();


    let image = document.querySelector(".container").children;

    for (i = 0; i < image.length; i++) {

        //Sets the value of data-caption to image_caption and sets it to lower case
        let image_caption = image[i].getAttribute("data-caption").toLowerCase();

        //Conditional to check if the image caption includes the user input
        if(image_caption.includes(userSearch)) {
            image[i].style.display = "";
        }
            else {
                image[i].style.display = "none";
            }
        }
    }

    userInput.addEventListener("keyup", searchFunction); 