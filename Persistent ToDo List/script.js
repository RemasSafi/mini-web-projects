let items = []

const storageKey = "todo-list-items"
const itemsDiv = document.getElementById("items")
const inputItem = document.getElementById("inputItem")

function renderItems(){
    itemsDiv.innerHTML = null;
    if(items.length === 0 ) return
    items.forEach(function(ele, index){
        const div = document.createElement("div")
        div.style.marginBottom = "10px"
    
        const button = document.createElement("button")
        button.textContent = "Delete"
        button.onclick = () => removeItem(index)
        
        const text = document.createElement("p")
        text.style.display= "inline-block"
        text.style.fontSize=  "22px"
        text.style.marginRight=  "28px"
        text.textContent = ele

        div.appendChild(text)
        div.appendChild(button)

        itemsDiv.appendChild(div)
    })
}

function loadItems(){
    const stringItems = localStorage.getItem(storageKey)
    if(stringItems)
        items = JSON.parse(stringItems)
    renderItems()

   
}
function saveItems(){
    const stringItems = JSON.stringify(items)
    localStorage.setItem(storageKey, stringItems)
}

function addItem(){
    let text = inputItem.value
    if(!text){
        alert("You cannot add an empty item")
        return
    }
    items.push(text)
    renderItems()
    inputItem.value = ""
    saveItems()
}
function removeItem(index){
    items.splice(index,1)
    renderItems()
    saveItems()
}

document.addEventListener("DOMContentLoaded", loadItems)
