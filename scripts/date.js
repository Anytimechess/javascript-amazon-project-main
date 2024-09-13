import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
let date=dayjs();
// console.log(date)
//15a
let newDate=date.add(5,'days').format('MMMM D');
// console.log(newDate)
//15b
let afterMonth=date.add(1,'month').format('MMMM D');
// console.log(afterMonth)
//15c
let beforeMonth=date.subtract(1,'month').format('MMMM D');
console.log(beforeMonth)
//15d
console.log(date.format('dddd'));
//15e
export default function isWeekend(date)
{
 return (date==='Saturday'||date==='Sunday')&&date;
}
let printWeekend=isWeekend('Tuesday');
console.log(printWeekend);