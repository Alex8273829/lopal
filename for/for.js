function lacofor() {
    let texto = "";

    for (let i = 0; i < 10; i++) {
       texto += "o numero é " + i + "<br>"
    }

    document.getElementById("demo").innerHTML = texto;
}