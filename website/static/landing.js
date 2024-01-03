let x = 0;
// front section
while (x <= 111) {
  x++;
  let seatPair = $("#landing-graphic").clone();
  seatPair.appendTo("#front-section");
  console.log(seatPair);
}

// front handi-cap
let j = 0;
while (j <= 6) {
  j++;
  let seatPair = $("#landing-graphic").clone();
  seatPair.appendTo("#front-section");
  console.log(seatPair);
}