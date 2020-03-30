console.log ("this is Calculator Kecocokan")
var nama1 = prompt ("Masukkan nama pertama")
var nama2 = prompt("Masukkan nama kedua")

console.log((nama1) + " and " + (nama2));
kecocokan = Math.round(Math.random()*100)
if (kecocokan >= 50){
    console.log(` ${kecocokan} % Kalian Berjodoh`)
}else if (kecocokan < 50){
    console.log(`${kecocokan} % Kalian Tidak Berjodoh`)
}
