let main = document.getElementById("main")
let count = 1

document.getElementById("addButton").addEventListener("click", function() {
    let div = document.createElement("div")
    div.className = "Box"
    div.innerHTML = count
    main.appendChild(div)
    count++
});