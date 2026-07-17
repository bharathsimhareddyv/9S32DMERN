function addtodo(){
    const list = String(document.getElementById("text").value)

const li = document.createElement("li")

li.innerHTML = `
<span>${list}</span>
<button onclick="updatetodo(this)">Update</button>
<button onclick="deletetodo(this)">Delete</button>
`
document.getElementById("datalist").appendChild(li)
document.getElementById("text").value = " "

}

function updatetodo(btn){
const newList = prompt("Enter a updated Todo")
btn.parentElement.querySelector("span").innerHTML = newList
}

function deletetodo(btn){
   btn.parentElement.remove()
}



