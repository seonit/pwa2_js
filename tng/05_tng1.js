// for(let i = 0; i < 5; i++) {
//   console.log(`*****`);
// }

// for(let i = 0; i < line; i++) {
//   let makedStar = '';

//   for(let j = 0; j < count; j++) {
//     makedStar += star;
//   }
//   console.log(`${makedStar}`);
// }

// let makedStar2 = '';

// for(let lineCnt = 0; lineCnt < 5; lineCnt++) {
//   makedStar2 += '*';
//   console.log(makedStar2);
// }

// let star = `*`;
// let count = 1;
// let line = 5;

// for(let i = 0; i < count; i++) {
//   let makedStar = '';
//   for(let j = 0; j < line; j++) {
//   console.log(`${makedStar += star}`);
//   }
// }
let makedStar = ``;

for(let lineCnt = 5; lineCnt > 0; lineCnt--) {
  makedStar += `*`;
  let makedSpace = ``;

  for(let spaceCnt = 1; spaceCnt < lineCnt; spaceCnt++) {
    makedSpace += ` `;
  }
  console.log(makedSpace + makedStar);
}
