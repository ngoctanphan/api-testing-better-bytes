let apiDefinition = "API là tập hợp các quy tắc cho phép phần mềm tương tác với nhau một cách hiệu quả"
let whyTestAPI = [
    "Đảm bảo tính đúng đắn",
    "Kiểm tra hiệu suất",
    "Phát hiện lỗi sớm",
    "Cải thiện bảo mật",
    "Xác minh khả năng tương thích",
    "Đảm bảo tính ổn định khi mở rộng"
]

// Sử dụng For Each
whyTestAPI.forEach((reason, index) => {
    console.log("Lý do " + (index+ 1) + ":" + reason);
});

console.log("--------------------------")
// Sử dụng vòng lặp For
for(let i = 0; i < whyTestAPI.length ; i++){
    console.log(`Lý do ${i + 1}: ${whyTestAPI[i]}`);
}