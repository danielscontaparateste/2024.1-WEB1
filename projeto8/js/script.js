var gb = 10;

function mudarCorBox(){
    const cor = document.querySelector("#iptNovaCor").value;
    let bx = document.querySelector("#bx1");
    bx.style.backgroundColor = cor;
    bx.style.borderRadius = "100px";

    console.log(x);
}

function alterarVarGlobal(){
    var x = 50;
    gb = 30;

    // console.log(gb);
}

function escopoVar(){
    const z = 7;
    var x = 10;
    // ....
    {
        let x = 5;    
        // if (x % 2 == 0){
        //     x = x * 2;
        // }else {
        //     x = x * 3;
        // }
        console.log("Dentro do bloco: "+x);
    }
    // z = z / 2;
    console.log("Fora do bloco: "+x);
    console.log("Valor da variável z: "+z);
}

function verificarParImpar(k){
    if (k % 2 == 0){
        k = k * 2;
    }else {
        k = k * 3;
    }
    let bx = document.querySelector("#bx1");
    bx.innerHTML = k;

}

function somar(){
    var iptX = document.getElementById("iptX");
    var iptY = document.getElementById("iptY");

    var x = parseInt(iptX.value);
    var y = parseInt(iptY.value);

    var z = x + y;

    var spnRes = document.getElementById("spnRes");

    spnRes.innerHTML = "Soma: "+z;

    verificarParImpar(z);

}