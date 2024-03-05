const button = document.querySelector(".btn");
const notesContainer = document.querySelector(".notes-container");
const Delete = document.querySelector(".input-box img")

button.addEventListener("click", function(){
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    img.src = "delete.png";
    inputBox.contentEditable = "true"
    inputBox.classList.add("input-box")

    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
    e.target.parentElement.remove()
    saveData ()
    } else if (e.target.tagName === "P"){
        let notes = document.querySelectorAll(".input-box")
        notes.forEach(nt => {
            nt.onkeyup = function(){
                saveData ()
            }
        })
    }
})

function saveData (){
    localStorage.setItem("data", notesContainer.innerHTML);
}

function showData(){
    notesContainer.innerHTML = localStorage.getItem("data");
}

showData()

document.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
    
})