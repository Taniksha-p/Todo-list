let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item); // Append the new item to the ul

    inp.value = ""; // Clear the input field
});
    // delBtn.addEventListener("click", function() { // Attach the event listener for delete button
    //     let par = this.parentElement;
    //     par.remove();
    
ul.addEventListener("click" , function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("delete");
    }


});