// const DB = [
//   { firstName: "Angie", cc: "12343", seatCode: "A2" },
//   { firstName: "Pedro", cc: "12343", seatCode: "B3" },
//   { firstName: "Pedro2", cc: "12343", seatCode: "C1" },
// ];

// const name = DB[1].firstName;
//    DB[2].cc;
// DB[i].seatCode

const DB = [];
createRoom();

function setupRoom() {
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
  ];
  const rows = 10;
  const seatsperRow = 5;

  return {
    letters,
    rows,
    seatsperRow,
  };
}

function createRoom() {
  const setup = setupRoom();
  document.querySelector('.rows-container').innerHTML = "";
  for (let i = 0; i < setup.rows; i++) {
    document.querySelector(
      ".rows-container"
    ).innerHTML += `<div class="d-flex border border-primary justify-content-around p-3 ${setup.letters[i]}">
        <div class="border border-sucess p-3 seat">${setup.letters[i]}</div>`;
    for (let s = 1; s < setup.seatsperRow; s++) {

        const indexObject = DB.findIndex((object) => {
            return object.seatCode == setup.letters[i]+s;
          });


        document.querySelector(`.${setup.letters[i]}`).innerHTML += `<div class="border border-sucess p-3 seat ${indexObject > -1 ? 'seat-busy': ''}" onclick="seatInfo('${setup.letters[i]}', ${s})">${s}</div>`
    }

    document.querySelector('.rows-container').innerHTML += "</div>";
  }
}

function seatInfo(letter, seatNumber) {
  document.querySelector(".seat-info").innerHTML = `La silla seleccionada es: ${
    letter + seatNumber
  }`;
  document.querySelector(
    ".reserve-button"
  ).innerHTML = `<button type="button" class="btn btn-primary" onclick="reserve('${letter}',${seatNumber})">Reservar ${
    letter + seatNumber
  }</button>`;
}

function reserve(letter, seatNumber) {
  const fullName = document.querySelector(".full-name").value;
  const cc = document.querySelector(".cc").value;

  DB.push({
    fullName,
    cc,
    letter,
    seatNumber,
    seatCode: letter + seatNumber,
  });

  reserveTable();
  createRoom();

  document.querySelector(".full-name").value = "";
  document.querySelector(".cc").value = "";
}

function reserveTable() {
  document.querySelector(".table tbody").innerHTML = "";
  for (let i = 0; i < DB.length; i++) {
    document.querySelector(
      ".table tbody"
    ).innerHTML += `<tr><td>${DB[i].seatCode}</td><td>${DB[i].cc}</td><td>${DB[i].fullName}</td><td> <button type="button" class="btn" onclick="deleteReservation('${DB[i].seatCode}')"><i class="bi bi-trash-fill"></i></button></td></tr>`;
  }
}

function deleteReservation(seatCode) {
  const indexObject = DB.findIndex((object) => {
    return object.seatCode == seatCode;
  });

  DB.splice(indexObject, 1);

  reserveTable();
  createRoom();
}
