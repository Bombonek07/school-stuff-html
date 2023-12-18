let main = document.getElementById("main")
document.getElementById('play').onclick = () => {
    const size = document.getElementById("size").value
    console.log(size + 'x' + size)
    const table = document.createElement("table")
    for(let y = 0; y < size; y++) {
        const tr = document.createElement("tr")
        for(let x = 0; x < size; x++){
            let td = document.createElement("td")
            td.onclick = () => {
                if(td.style.backgroundColor == "") {
                    td.style.backgroundColor = document.getElementById("color").value
                }
                else {
                    td.style.backgroundColor = ""
                }
            }
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    main.innerHTML = ""
    main.appendChild(table)
}
