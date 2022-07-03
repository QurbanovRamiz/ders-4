function isRepeatNum(n) {
  let first, second, thirth, fourth;

  if (n > 9999 || n <= 1000) {
    console.error("olmaz!!!!");
    return 0;
  }

  first = n % 10;
  n = (n - (n % 10)) / 10;
  second = n % 10;
  n = (n - (n % 10)) / 10;
  thirth = n % 10;
  n = (n - (n % 10)) / 10;
  fourth = n % 10;

  if (
    first == second ||
    first == thirth ||
    first == fourth ||
    second == thirth ||
    second == fourth ||
    thirth == fourth
  ) {
    console.log("vardir");
  } else console.log("yoxdur");
}

isRepeatNum(1224);
//  if (
//   first != second &&
//   first != thirth &&
//   first != fourth &&
//   second != thirth &&
//   second != fourth &&
//   thirth != fourth
// ) {
//   console.log(yoxdur);
// }

// var n = 257369;
// var reverseN = 0;
// if (n > 0) {
//   for (var num = n; num > 0; num = (num - (num % 10)) / 10) {
//     reverseN *= 10;
//     reverseN += num % 10;
//   }

//   console.log(reverseN);
// }
