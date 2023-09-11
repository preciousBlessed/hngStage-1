const newDate = new Date();
const currentTime = new Date().getTime();
// console.log(new Date(currentTime + 60 * 60 * 1000));
let newDate2 = new Date(currentTime).toISOString();
let mod_newDate = newDate2.replace(/\d\d.\d\d\d/, (s) => Number(s).toFixed(0));
console.log(newDate2);
console.log(mod_newDate);
console.log(
  "This is just for testing purpose, I used it to figure out my date format"
);
