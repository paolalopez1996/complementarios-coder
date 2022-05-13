//ejercicio complementario. saber cual fue tu nota en el examen:
//nombre: Gianne Lopez comision: 30350
do {
	var nota = prompt("Introduce tu nota");
	if (Number(nota) == nota) {
		if (nota > 0 && nota <= 10) {
			if (nota <= 3) {
				alert("deficiente");

			}else if (nota < 5) {
				alert("muy bajo");

            }else if (nota == 5) {
				alert("pasaste con la nota minima");

			}else if (nota <= 6) {
				alert("Suficiente");

			}else if (nota <= 7) {
				alert("Bien");

			}else if (nota <= 9) {
				alert("excelente"); 

			}else if (nota == 10) {
				alert("Sobresaliente");
                
        for (let i = 0; i <= 10 ; i++) {
        if (i == 10) {
        alert('felicidades, si obtuviste 10 en tu  examen, se te sumara 5pts extras a tu proyecto')
    }
    }
		}
		}else {
			alert("Nota erronea");
		}
	} else {
		
		if (nota != undefined) {	
			alert("Introduce un numero valido");
		}
	}
}while (nota != undefined);	
