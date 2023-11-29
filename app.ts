let courseName: string = "Agit";
console.log(courseName);
let printNumbers = (start: number, end: number): void => {
  let temp: string = "";
  if (start > end) {
    console.log("Invalid input");
    return;
  }
  for (let i: number = start; i < end; i++) {
    temp += `${i} `;
  }
  console.log(temp);
};

printNumbers(14, 20);
