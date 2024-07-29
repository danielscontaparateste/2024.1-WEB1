function execLaco(){
    var cars = [];
    // cars[0] = 0;
    // cars[1] = 1;
    // cars[2] = 2;
    // cars[3] = 3;
    // cars[4] = 4;
    // cars[5] = 5;

    const qtd = 10;

    for (let k=0; k < qtd; k++){
        cars[k] = k / 10;
    }

    // var cars = ["Ford Ka", "Fiat Palio", "Renault Clio"];

    for (let k=0; k < cars.length; k++){
        console.log(cars[k]);
    }

}