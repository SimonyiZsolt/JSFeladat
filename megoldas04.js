let eletkor = Number(prompt("Adj meg egy életkort:"));
let besorolas;

if(eletkor>=60&&eletkor<=120){
	besorolas = "Aggkor";
}
else if(eletkor>=30){
	besorolas = "Felnőtt kor";
}

else if(eletkor>=20){
	besorolas = "Fiatal felnőttkor";
}

else if(eletkor >=16){
	besorolas = "Ifjúkor";
}

else if (eletkor >=12){
	besorolas = "Serdülőkor";
}

else if (eletkor >=6){
	besorolas = "Gyermekkor";
}

else if (eletkor >=0){
	besorolas = "Kisgyermekkor";
}
else{
	besorolas = "Érvénytelen adat!";
}

document.write(`A(z) ${eletkor} év besorolása: ${besorolas}`);