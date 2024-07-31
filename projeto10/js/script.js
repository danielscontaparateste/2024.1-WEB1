function criarElemento(){
    // console.log("Oi");
    const qtd = parseInt(document.querySelector("#iptQtd").value);

    // var p;
    var bx;
    for (let k=0; k<qtd; k++){
        // p = document.createElement("p");
        // p.innerHTML = "Paragrafo criado."
        // document.body.appendChild(p);
        bx = document.createElement("div");
        bx.setAttribute("class", "box");
        bx.setAttribute("id","b"+k);
        bx.innerHTML = k;
        document.body.appendChild(bx);

    }    

    document.querySelector("#btnExe").disabled = true;
}

function alterarElemento(){
    const cod = parseInt(document.querySelector("#iptCod").value);
    const cor = document.querySelector("#iptCor").value;

    bx = document.querySelector("#b"+cod);
    bx.style.backgroundColor = cor;
}