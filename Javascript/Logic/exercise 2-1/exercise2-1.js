let sumNote = 0;
let contNotes = 0;

function average(e) {
  if (e.key == "Enter") {
    const note = Number(document.querySelector(".input-note").value);

    if (note != "") {
      contNotes++;
      fillNotes(note);
      sumNote += note;
      document.querySelector('.average-output').innerHTML = sumNote / contNotes;
    } else {
      alert(
        "No estás ingresando notas, por favor ingresa una nota para continuar"
      );
    }
  }
}

function fillNotes(note) {
  document.querySelector(".table tbody tr").innerHTML += `<td>${note}</td>`;
  document.querySelector(".input-note").value = "";
}
