const array1 = [2, 3, 5, 8, 9, 10, 11, 12, 15, , 17];

function findPrime(array) {
  arary = array.filter((number) => {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
  console.log(arary);
}
findPrime(array1);

// Điểm tổng kết (ĐTK) của môn "Lập trình hướng đối tượng" được tính bằng trọng số
//     0.4 * (Điểm thành phần) + 0.6 * (Điểm cuối kì)
//     Nếu ĐTK >= 8.0 --> đạt A
//         7.0 <= ĐTK < 8.0 --> đạt B
//         6.0 <= ĐTK < 7.0 --> đạt C
//         4.0 <= ĐTK < 6.0 --> đạt D
//         ĐTK < 4.0 --> đạt F (trượt)
//     Hãy viết 1 chương trình để nhập điểm (điểm TP và điểm CK) cho n sinh viên (n > 2) và xác định:
//         + Chọn bất kì 1 sinh viên, tính xác suất để sinh viên đó đạt B 😀
//         + Số sinh viên đạt A
//         + Số sinh viên bị trượt

function countSomthing(array) {
  // Lap day diem TB
  const markList = array.map((arr) => {
    return arr[0] * 0.4 + arr[1] * 0.6;
  });
  console.log(markList);
  // Lap day rank
  const rank = markList.map((num) => {
    if (num >= 8) return "A";
    if (num >= 7 && num < 8) return "B";
    if (num >= 6 && num < 7) return "C";
    if (num >= 4 && num < 6) return "D";
    return "F";
  });
  console.log(rank);

  let rankAStudent = 0;
  let rankBStudent = 0;
  let rankFStudent = 0;
  rank.forEach((rk) => {
    if (rk === "A") rankAStudent++;
    if (rk === "B") rankBStudent++;
    if (rk === "F") rankFStudent++;
  });

  const xacSuatDatB = rankBStudent / array.length;
  console.log(`Số học sinh đạt điểm A là ${rankAStudent}`);
  console.log(`Số học sinh đạt điểm F là ${rankFStudent}`);
  console.log(`Xác suất để 1 sv bất kì đạt B là ${xacSuatDatB}`);
}

countSomthing([
  [10, 8],
  [7, 9],
  [3, 4],
  [7, 8],
]);
