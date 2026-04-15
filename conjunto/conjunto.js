function conjunto(){
    const letras = new Set();

    letras.add("a")
    letras.add("c")
    letras.add("b")

    console.log(letras.has("g"))

    //delete() é um método que remove um elemento do conjunto
    letras.delete("c")
    console.log(letras.has("b"))

    for (const x of letras.values()){
        console.log(x);
    }

    for (const x of letras.keys()){
        console.log(x);
    }

}
conjunto();