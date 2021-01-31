// Bài 1
//a
function findElement(array, sum) {
  const input = [];
  for (i = 0; i < array.length; i++) {
    for (j = array.length - 1; j >= 0; j--) {
      if (i < j && array[i] + array[j] == sum) {
        input.push([i, j]);
      }
    }
  }
  if (input.length === 0) {
    console.log("không tìm thấy");
  } else {
    console.log(input);
  }
}
findElement([1, 2, 3, 4, 5], 6);
findElement([1, 2, 3, 4, 5], 10);
//b

const danCuu = [
  { name: "A", long: 6 },
  { name: "B", long: 8 },
  { name: "C", long: 5 },
  { name: "D", long: 10 },
  { name: "E", long: 12 },
  { name: "F", long: 13 },
];
let soLongCatduoc = 0;
function tinhSoLong(m) {
  for (i = 0; i < m; i++) {
    const listLong = danCuu.map((each) => {
      return each.long + 2;
    });
    const conNhieuLongNhat = Math.max.apply(Math, listLong);
    soLongCatduoc = soLongCatduoc + (conNhieuLongNhat - 1);

    danCuu.forEach((each) => {
      if (each.long === conNhieuLongNhat - 2) {
        each.long = 1;
      } else {
        each.long += 2;
      }
    });
  }
  console.log(soLongCatduoc);
}

tinhSoLong(4);
