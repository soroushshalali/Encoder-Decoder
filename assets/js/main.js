document.getElementById("decode").addEventListener("click", () => {
    document.getElementById("show").innerHTML = "";
    let outP = [];
    let mainoutP = [];
    let eingabe = document.getElementById("eingabe").value;
    let x = eingabe.split("");
    for (let i = 0; i < x.length; i++) {
        outP.push(eingabe.charCodeAt(i));
        mainoutP.push(String.fromCharCode(outP[i] - 3))
        document.getElementById("show").innerHTML += mainoutP[i];
    }
})
document.getElementById("encode").addEventListener("click", () => {
    document.getElementById("show").innerHTML = "";
    let outP = [];
    let mainoutP = [];
    let eingabe = document.getElementById("eingabe").value;
    let x = eingabe.split("");
    for (let i = 0; i < x.length; i++) {
        outP.push(eingabe.charCodeAt(i));
        mainoutP.push(String.fromCharCode(outP[i] + 3))
        document.getElementById("show").innerHTML += mainoutP[i];
    }
})


