let szam = Number(prompt("Adj meg egy számot:"));
let oszto = Number(prompt("Adj meg egy osztót:"));

if(szam%oszto==0){
	document.write(`A(z) ${szam}/${oszto} maradék nélkül elvégezhető osztás.`);
}else{
	document.write(`A(z) ${szam}/${oszto} NEM maradék nélkül elvégezhető osztás.`);
}