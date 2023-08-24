function getSeatType(seatNumber, rowNumber) {
  const totalSeatsInRow = 8;
  const seatMod = seatNumber % totalSeatsInRow;

  if (seatMod === 1) {
      return "Window seat";
  } else if (seatMod === 2) {
      return "Middle berth";
  } else if (seatMod === 3) {
      return "Aisle seat";
  } else if (seatMod === 4) {
      return "Aisle seat";
  } else if (seatMod === 5) {
      return "Middle berth";
  } else if (seatMod === 6) {
      return "Window seat";
  } else if (seatMod === 7) {
      return "Side lower berth";
  } else {
      return "Side upper berth";
  }
}
const seatNumber = 54;
const rowNumber = 7;
const seatType = getSeatType(seatNumber, rowNumber);
console.log("Your seat:", seatType);
