let lower = Number(prompt("Adj meg az intervallum alsó határát:"));
let upper = Number(prompt("Add meg az intervallum felső határát:"));
let rnd;

do{
	rnd =  Math.round(Math.random()*(upper-lower))+lower;
}while(rnd%2 != 0);

document.write(`Egy páros random szám az intervallumban: ${rnd}`);
