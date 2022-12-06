const button = document.querySelector(".button");
const input = document.querySelector(".input");
const hidden_Text = document.querySelector(".hidden")


document.addEventListener("click",()=> {
    if (input.value.trim() === "") {
        hidden_Text.classList.add("no-hide");
        input.classList.add("new");  
    }
    else {
        hidden_Text.classList.remove("no-hide");
        input.classList.remove("new"); 
    }
    
})


// button.addEventListener("click", () => {
//     if (input.value.trim() === "") {
//         hidden_Text.classList.add("no-hide");
//         input.classList.add("new");
//     }else {
//         hidden_Text.classList.remove("no-hide");
//         input.classList.remove("new");
//     }
// })
