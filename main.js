let numeri = [3, 5, 10, 2, 8];
console.log(`Numeri:`, numeri);
console.log(`Totale numeri:`, numeri.length);



let somma = numeri.reduce((acc, num)=> acc + num)
console.log(`Somma dei numeri:`, somma);

let media = somma / numeri.length;
console.log(`Media dei numeri:`, media);

let valoriminori = numeri.filter(num => num < media);
console.log(`Valori minori alla media:`, valoriminori);
console.log(`Totale valori minori:`, valoriminori.length);

let valorimaggiori = numeri.filter(num => num > media);
console.log(`Valori maggiori alla media:`, valorimaggiori);
console.log(`Totale valori maggiori:`, valorimaggiori.length);


function firmaAnimata() {
  const firma = [
    " ",
    "╔═══════════════════════════╗",
    "║   👨‍💻 Andrea Caocci - Dev   ║",
    "║     Codice originale ©    ║",
    "╚═══════════════════════════╝",
    " "
  ];
  firma.forEach((riga, i) => {
    setTimeout(() => {
      console.log("%c" + riga, "color: cyan; font-family: monospace; font-size: 14px;");
    }, i * 200);
  });
}
firmaAnimata();