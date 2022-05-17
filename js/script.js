let userInput = document.getElementsByID("search"); 

userInput.addEventListener("keyup", searchFunction);

function searchFunction() {
    var i = document.getElementsByID("search")
    i.value = i.value.toLowerCase();
    console.log("search")
}

