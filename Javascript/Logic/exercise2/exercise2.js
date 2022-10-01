firstAlert();
let cont = 1;

function eleven(e) {
  if (e.key == "Enter") {
    const n = document.querySelector(".input-number").value;
    
    if (cont <= 8) {
      cont++;
      alert(`Ingrese la nota ${cont}`);
    } else {
      alert('No se permiten más notas')
    }
  }
}

function firstAlert() {
  alert("ingrese la nota 1");
}
