firstAlert();
let cont = 1;
let notes = 0;
contNotes = 0;

function eleven(e) {
  if (e.key == "Enter") {
    const n = document.querySelector(".input-number").value;

    if (cont <= 8) {
      cont++;
      fillNotes(n);
      alert(`Ingrese la nota ${cont}`);
      notes = notes + parseInt(n);
      contNotes++;
      document.querySelector('.average').innerHTML = notes / contNotes;
    } else {
      alert("No se permiten más notas");
    }
  }
}

function firstAlert() {
  alert("ingrese la nota 1");
}

function fillNotes(n) {
  document.querySelector(".tbody tr").innerHTML += `<td>${n}<td>`;
}
