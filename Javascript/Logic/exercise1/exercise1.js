function eleven(e) {
  if (e.key == "Enter") {
    const n = document.querySelector(".input-number").value;
    let result = "";
    for (let i = 1; i <= n; i++) {
      result = result + `<td>${i*11}</td>`
    }

    let tableContent = `<tr> ${result} </tr>`;

    document.querySelector('.tbody').innerHTML = tableContent;

  }
}
