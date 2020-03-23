document.getElementById("decode").addEventListener("click", () => {
    document.getElementById("show").innerHTML = "";
    let outP = [];
    let mainoutP = [];
    let eingabe = document.getElementById("eingabe").value;
    let x = eingabe.split("");
    for (let i = 0; i < x.length; i++) {
        outP.push(eingabe.charCodeAt(i));
        if ((outP[i] - 3) < 65) {
            outP[i] = outP[i] + 26;
        } else if ((outP[i] - 3) < 97 && (outP[i] - 3) > 90) {
            outP[i] = outP[i] + 26;
        }
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
        if ((outP[i] + 3) > 122) {
            outP[i] = outP[i] - 26;
        } else if ((outP[i] + 3) > 90 && (outP[i] - 3) < 97) {
            outP[i] = outP[i] - 26;
        }
        mainoutP.push(String.fromCharCode(outP[i] + 3))
        document.getElementById("show").innerHTML += mainoutP[i];
    }
})


