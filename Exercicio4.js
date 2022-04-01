function passos(x0, x, dp, k, p){
    if (x0 >= x){
        return console.log("Passos: " + p);
    } else {
        passos(x0 + dp, x, dp, k, p + 1.)
        console.log("Posição: " + x0);
        console.log("Distância de passos: " + dp);
    }
    passos(0, 40, 1, 2, 0);
}