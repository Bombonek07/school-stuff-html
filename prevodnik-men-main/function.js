let pre_z;
let pre_do;

async function day(){
    let raw = await fetch("https://data.kurzy.cz/json/meny/b[6].json")
    let data = await raw.json()
    let day = data["denc"]
    document.getElementById("den").innerHTML = "Naposledy aktualizováno podle kurzů České národní banky dne: " + day;
}

function currency(){ 
    return pre_z = document.getElementById("option").value; 
}

function currency2(){ 
    return pre_do = document.getElementById("option2").value;
}

async function input(){
    let num = document.getElementById("input").value;
    let raw = await fetch("https://data.kurzy.cz/json/meny/b[6].json")
    let data = await raw.json()
    let kurz = 0
    let kurz2 = 0
    if (num === ""){
        if (pre_z === "CZK"){
            kurz = 1
            document.getElementById("alert").innerHTML = "";
        } else if (pre_z === "null") {
            document.getElementById("alert").innerHTML = "VYBERTE MĚNU";
            document.getElementById("num").innerHTML = "";
            document.getElementById("kurz").innerHTML = "";
            return;
        } else {
            kurz = data["kurzy"][pre_z]["dev_stred"]
            document.getElementById("alert").innerHTML = "";
        }

        if (pre_do === "CZK"){
            kurz2 = 1
            document.getElementById("alert").innerHTML = "";
        } else if (pre_do === "null") {
            document.getElementById("alert").innerHTML = "VYBERTE MĚNU";
            document.getElementById("num").innerHTML = "";
            document.getElementById("kurz").innerHTML = "";
            return;
        } else {
            kurz2 = data["kurzy"][pre_do]["dev_stred"]
            document.getElementById("alert").innerHTML = "";
        }

        let kurz3 = kurz/kurz2
        document.getElementById("kurz").innerHTML = kurz3.toFixed(4);
    } else {
        if (pre_z === "CZK"){
            kurz = 1
            document.getElementById("alert").innerHTML = "";
        } else if (pre_z === "null") {
            document.getElementById("alert").innerHTML = "VYBERTE MĚNU";
            document.getElementById("num").innerHTML = "";
            document.getElementById("kurz").innerHTML = "";
            return;
        } else {
            kurz = data["kurzy"][pre_z]["dev_stred"]
            document.getElementById("alert").innerHTML = "";
        }

        if (pre_do === "CZK"){
            kurz2 = 1
            document.getElementById("alert").innerHTML = "";
        } else if (pre_do === "null") {
            document.getElementById("alert").innerHTML = "VYBERTE MĚNU";
            document.getElementById("num").innerHTML = "";
            document.getElementById("kurz").innerHTML = "";
            return;
        } else {
            kurz2 = data["kurzy"][pre_do]["dev_stred"]
            document.getElementById("alert").innerHTML = "";
        }

        let kurz3 = kurz/kurz2
        let kurz4 = num*kurz/kurz2
        document.getElementById("kurz").innerHTML = kurz3.toFixed(4);
        document.getElementById("num").innerHTML = kurz4.toFixed(4);
    }
}
//test1