const arr1 = [3, 2, 1, 4];
const arr2 = [7, 6, 5, 8, 9];

console.log(arr1.concat(arr2).sort((a, b) => a - b));

// Bài 2
// 1. các chức năng
// -đăng nhập và xác thực
// -tạo bài thi
// -tự chấm bài thi
// -lưu trữ kết quả thi

// 2.
// -đăng nhập và xác thực
//  đăng nhập để làm được bài thi , xem được kết quả thi và lịch sử các lần thi tương ứng với từng sinh viên
// -tạo bài thi
// tạo bài thi dành cho mỗi cá nhân từ 1 ngân hàng đề ban đầu, đảm bảo mỗi đề thi đều ngẫu nhiên và công bằng
// -tự chấm bài thi
// khi thí sinh làm xong bài, chấm điểm trả về cho các bài thi
// - lưu trữ kết quả thi
// lưu trữ lại kết quả thi với thời gian nộp bài, số điểm riêng với từng tài khoản thi một

// 3. đối tượng

// -tài khoản thi
//  + đặc điểm : tài khoản thi có tên, tuổi,mã hs/sv với từng học sinh
//  + mối quan hệ : tài khoản thi có các bài thi và lưu trữ các kết quả bài thi

// -bài thi
//  + đặc điểm : bài thi có chia số lượng câu 60%/30%/10% tương ứng với các mức dễ-tb-khó
//  +mối quan hệ: 1 bài thi có nhiều câu hỏi thi

//  -câu hỏi :
//   +đặc điểm : câu hỏi tương đương với các mức độ dễ-tb-khó
//  +mối quan hệ : các câu hỏi ngẫu nhiên độc lập với nhau và tập hợp các câu hỏi nằm trong 1 bài thi

//  - kết quả thi :
//   +đặc điểm : chứa ngày,tên, điểm của các bài thi
//    +mối quan hệ : chứa các kết quả của bài thi
