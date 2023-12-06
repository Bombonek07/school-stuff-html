console.log("hello")
let n = 2
let out = ""

for (let i = 1;i <= 10; i++) {
    if (i > 1) {
        out += "-"
    }
    if ((i * n) < 10) {
        out += `0${i * n}`
    }
    else {
        out += `${i * n}`
    }
}

console.log(out)