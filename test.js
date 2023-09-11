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




// other tests
/*
 const now = new Date()
const formatted = now
  .toISOString()
  .replace(/\d{2}\.\d{3,}(?=Z$)/, num =>
    Number(num).toFixed(2).padStart(5, "0"))
console.log(formatted)
 */

/*
just incase seconds part of the time fails...
d = '2021-11-02T06:22:03.266Z'
> d.replace(/(\d\d\.\d\d\d)/, s=>Number(s).toFixed(2).padStart(5, '0'))
'2021-11-02T06:22:03.27Z'
*/