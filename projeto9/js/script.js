function execLaco(){
    var cars = [];
    // cars[0] = 0;
    // cars[1] = 1;
    // cars[2] = 2;
    // cars[3] = 3;
    // cars[4] = 4;
    // cars[5] = 5;

    const qtd = parseInt(document.querySelector("#iptQtd").value);
    
    // Exercício: Substituir o laço for por while e do-while.
    for (let k=0; k < qtd; k++){
        // cars[k] = k / 10;
        cars[k] = k;
    }

    // var cars = ["Ford Ka", "Fiat Palio", "Renault Clio"];

    const spnRes = document.querySelector("#spnRes");

    
    var str = "";
    // Exercício: Substituir o laço for por while e do-while.
    for (let k=0; k < cars.length; k++){
        str = str + "<br>" + cars[k];
        // console.log(cars[k]);
    }

    console.log(str);
    spnRes.innerHTML = str;


}


