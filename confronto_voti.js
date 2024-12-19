function confronto_voti() {
    var voto1= document.getElementById("voto1").value;
    var voto2= document.getElementById("voto2").value;
    var voto3= document.getElementById("voto3").value;

    var confronta= "";
    if (voto1>voto2 && voto1>voto3) {
        confronta= "Il primo voto è piu il alto";
    }
    else if (voto2>voto1 && voto2>voto3) {
        confronta= "il secondo voto è il piu alto";
    }
    else if (voto3>voto1 && voto3>voto2) {
        confronta= "il terzo voto è il più alto";
    }
    else{
        confronta= "i tre voti sono uguali";
    }

document.getElementById("confronta").innerText= confronta;
}