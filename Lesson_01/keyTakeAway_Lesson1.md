## Lesson 01

API - Application Programming Interface

- Giúp các hệ thống nhận/trao đổi dữ liệu với nhau
- → Giúp hđ nhanh, độc lập hơn

Tại sao cần test API:

- Đảm bảo dữ liệu đúng như mong đợi
- Phát hiện lỗi sớm
- Đảm bảo hiệu năng
- Bảo mật

Các hình thức test API phổ biến:

- Functional Testing
- Load Testing
- Security Testing
- Intergration Testing

Webs APIs:

- REST API: giao thức HTTP, trao đổi qua JSON, đơn giản dễ sd khả năng mở rộng cao
- SOAP API: giao thức XML, dùng cho doanh nghiệp, tính bảo mật và độ tin cậy cao
- GrapQL: do FB phát triển

XML - eXtensible Markup Language

- Ngôn ngữ đánh dấu mở rộng
- Được tạo mở các thẻ đóng, mở

JSON - Javascript Object Notation

- Định dạng dữ liệu dựa trên văn bản (text-based data format)
- Cấu trúc “”key”” :  “value”

---

Set-up push code lên Github

- Download git-scm
1. Kết nối với Github
    1. Tạo SSH
        
          + Mở Terminal trên window: **ssh-keygen -t rsa -b 4096 -C “ngoctanphan01@gmail.com”**
        
        
         + Lấy SSH key đã tạo: **cat ~/.ssh/id_rsa.pub**
        
        
    2. Link SSH với Github
        
        Paste ssh key vào mục SSH and GPG key trên Github để link với Local
        
    3. Push code lên Git

        git init

        git remote add origin git@github.com:ngoctanphan/api-testing-better-bytes.git
    --------

        git add .

        git commit -m”nội dung push”

        git push origin main