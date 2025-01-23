let szam = Number(prompt("Adj meg egy számot:"));
let hatvany = Number(prompt("Add meg a hatványozás mértékét:"));

let eredmeny = szam**hatvany;

document.write(`Eredmény: ${szam}<sup>${hatvany}</sup> = ${eredmeny}`);