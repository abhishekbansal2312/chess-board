let body = document.body;
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.flexDirection = "column";
body.style.background =
  "url(https://images.unsplash.com/photo-1579267217516-b73084bd79a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ymx1ZXxlbnwwfHwwfHx8MA%3D%3D)";
h2 = document.querySelector("h2");
h2.style.color = "White";
h2.style.fontSize = "50px";
let chess = document.getElementById("chess");
let parentDiv = document.createElement("div");
parentDiv.classList.add("parent-div");
chess.appendChild(parentDiv);
parentDiv.style.border = "1px solid black";
parentDiv.style.width = "400px";
parentDiv.style.height = "400px";

// let flag = 0;
let pieces = [
  ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
  ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
  ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
];
parentDiv.style.display = "grid";
parentDiv.style.gridTemplateColumns = "repeat(8, 50px)";
parentDiv.style.gridTemplateRows = "repeat(8, 50px)";
parentDiv.style.gap = "0px";

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    let cell = document.createElement("div");  
    parentDiv.appendChild(cell);
    cell.style.width = "50px";
    cell.style.height = "50px";
    cell.style.fontSize = "20px";
    cell.innerHTML = pieces[i][j];
    cell.style.display = "flex";
    cell.style.justifyContent = "center";
    cell.style.alignItems = "center";
    cell.style.flexDirection = "column";

    if ((i + j) % 2 === 0) {
      cell.style.backgroundColor = "rgb(27, 72, 141)";
      cell.style.color = "white";
      cell.addEventListener("mouseover", function () {
        cell.style.backgroundColor = "rgb(12, 31, 60)";
      });
      cell.addEventListener("mouseout", function () {
        cell.style.backgroundColor = "rgb(27, 72, 141)";
      });
    } else {
      cell.style.backgroundColor = "rgb(241, 245, 189)";
      cell.style.color = "black";
      cell.addEventListener("mouseover", function () {
        cell.style.backgroundColor = "white";
      });
      cell.addEventListener("mouseout", function () {
        cell.style.backgroundColor = "rgb(241, 245, 189)";
      });
    }
    cell.style.border = "3px solid black";

    // flag++;
  }
}
