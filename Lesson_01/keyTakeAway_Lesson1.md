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


# **📚 Lesson 01: API Fundamentals**

## ✅ **API - Application Programming Interface**

- Giúp các hệ thống **nhận và trao đổi dữ liệu** với nhau.
- 👉 **Tăng tốc độ hoạt động** và đảm bảo các hệ thống **hoạt động độc lập** hơn.

---

## 🛠️ **Tại sao cần Test API?**

1. ✅ **Đảm bảo dữ liệu chính xác** như mong đợi.
2. 🐞 **Phát hiện lỗi sớm**, giảm rủi ro trong quá trình phát triển.
3. ⚡ **Đảm bảo hiệu năng**, giúp API hoạt động nhanh và ổn định.
4. 🔒 **Tăng cường bảo mật** cho hệ thống.

---

## 🔍 **Các hình thức Test API phổ biến**

- **✅ Functional Testing**: Kiểm tra chức năng và tính chính xác của API.
- **⚡ Load Testing**: Đánh giá khả năng chịu tải và hiệu suất của API.
- **🔒 Security Testing**: Xác minh các yếu tố liên quan đến bảo mật.
- **🔗 Integration Testing**: Đảm bảo API tương tác đúng với các thành phần khác

---

## 🌐 **Các loại Web APIs**

1. **🔄 REST API**
    - Giao tiếp thông qua **HTTP**.
    - Dữ liệu trao đổi dưới dạng **JSON**.
    - Đơn giản, dễ sử dụng, **khả năng mở rộng cao**.
2. **📄 SOAP API**
    - Sử dụng giao thức **XML**.
    - Thường dùng trong **môi trường doanh nghiệp**.
    - **Tính bảo mật và độ tin cậy cao**.
3. **⚙️ GraphQL**
    - Được **Facebook phát triển**.
    - Cho phép client yêu cầu đúng dữ liệu cần thiết, **tối ưu hóa truy vấn**.

---

## 📝 **Định dạng dữ liệu phổ biến**

### ✅ **XML - eXtensible Markup Language**

- Ngôn ngữ đánh dấu mở rộng.
- Sử dụng các **thẻ đóng và mở** để bao bọc dữ liệu.

### ✅ **JSON - JavaScript Object Notation**

- Định dạng dữ liệu dựa trên **văn bản (text-based)**.
- Cấu trúc dữ liệu theo cặp:

```jsx
{
"key": "value"
}
```

---

# 🚀 **Hướng dẫn Set-up và Push Code lên GitHub**

### 1. **Cài đặt Git**

- Tải và cài đặt từ [git-scm.com](https://git-scm.com/).

### 2. **Kết nối với GitHub bằng SSH**

### 🔑 **Bước 1: Tạo SSH Key**

- Mở Terminal trên Windows và chạy lệnh sau:

```bash
ssh-keygen -t rsa -b 4096 -C "ngoctanphan01@gmail.com"

```

### 📄 **Bước 2: Lấy SSH Key**

- Xem SSH key vừa tạo bằng lệnh:

```bash
cat ~/.ssh/id_rsa.pub

```

### 🔗 **Bước 3: Liên kết SSH với GitHub**

- Truy cập GitHub → **Settings** → **SSH and GPG keys** → **New SSH Key**.
- Dán SSH key vừa copy vào và lưu.

### 3. **Push Code lên GitHub**

- Thực hiện các bước sau:

```jsx
git init
git add .
git commit -m "Initial commit"
git remote add origin git@github.com:username/repo.git
git push -u origin main
```

✨ **Lưu ý:**

- Thay `"username/repo.git"` bằng đường dẫn repo thực tế của bạn.
- Kiểm tra xem SSH đã kết nối thành công chưa:

```jsx
ssh -T git@github.com
```