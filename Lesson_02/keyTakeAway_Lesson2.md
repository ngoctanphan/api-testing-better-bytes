## 📚 **Lesson 02: REST & SOAP API Fundamentals**

### 🌐 **1. REST - REpresentational State Transfer**

- Giao thức dựa trên **HTTP**, đơn giản, dễ sử dụng và dễ tích hợp.
- Dữ liệu được **trao đổi dưới dạng JSON**, giúp tăng tính mở rộng.

---

### 🔄 **2. SOAP - Simple Object Access Protocol**

- Giao thức truyền tin đặc biệt, sử dụng **XML** để định dạng dữ liệu.
- Hỗ trợ truyền tải qua **HTTP** và **SMTP**.
- Được sử dụng nhiều trong các hệ thống yêu cầu **bảo mật và độ tin cậy cao**.

---

### 📨 **4. Cấu Trúc Request API**

**Client**: Người gửi API → gửi đi **request**

**Server**: Người nhận API → trả về **response**

🔸 **1. HTTP Method**

| **Method** | **Định nghĩa** | **Ví dụ sử dụng** | **Body** | **Idempotent** | **Safe** |
| --- | --- | --- | --- | --- | --- |
| **GET** | Lấy dữ liệu từ server. | Lấy thông tin người dùng. | ❌ | ✅ | ✅ |
| **POST** | Gửi dữ liệu mới để tạo tài nguyên. | Tạo người dùng mới. | ✅ | ❌ | ❌ |
| **PUT** | Cập nhật toàn bộ tài nguyên. | Cập nhật toàn bộ thông tin người dùng. | ✅ | ✅ | ❌ |
| **PATCH** | Cập nhật một phần tài nguyên. | Cập nhật email của người dùng. | ✅ | ✅ | ❌ |
| **DELETE** | Xoá tài nguyên. | Xoá người dùng khỏi hệ thống. | ✅ | ✅ | ❌ |
| **HEAD** | Trả về header mà không lấy nội dung. | Kiểm tra metadata của tài nguyên. | ❌ | ✅ | ✅ |
| **OPTIONS** | Trả về các phương thức HTTP mà server hỗ trợ. | Kiểm tra phương thức API. | ❌ | ✅ | ✅ |
- **Idempotent**: Gửi nhiều lần một request vẫn cho kết quả giống nhau.
- **Safe**: Không làm thay đổi dữ liệu trên server khi gọi API.

---

🔸 **2. URL/Endpoint Structure**

- Example:  https://api.example.com/v1/users?status=active&sort=asc#section2
- Scheme: https
- Subdomain: api
- Domain: example.com
- Path: /v1/users
- Query parameter: Cấu trúc key = value, Theo sau bởi dấu ? hoặc &
    - Param đầu tiên theo sau ? —> ?status=active
    - Từ param thứ hai theo sau & —>&sort=asc
- Fragment: lưu lại ghim trên trang web, chỉ đến một mục cụ thể —> #section2

---

🔸 **3. Header**

- Chứa **metadata** về request, như loại dữ liệu, xác thực, mã hóa, v.v.

---

🔸 **4. Body**

- Dữ liệu chính được gửi trong request (đặc biệt với **POST, PUT, PATCH**).

---

### 📥 **5. Cấu Trúc Response API**

1. **Status Code** → Mã trạng thái phản hồi (200, 404, 500,...)
2. **Header** → Thông tin về dữ liệu phản hồi.
3. **Body** → Nội dung chính được trả về từ server.

---

### 📦 **6. Header API**

🎯 **Ví dụ: API headers** giống như **một phong bì thư**:

- **Thân thư** (Body) → Nội dung chính mà bạn muốn gửi (giống như **payload** trong API).
- **Phong bì thư** (Header) → Thông tin bổ sung được ghi trên phong bì, giúp bưu điện và người nhận xử lý thư đúng cách

---

### 🔸 **Các Loại Header Phổ Biến**

✅ **1. Authentication Header**

- `Authorization`: Chứa token xác thực của client.
- `WWW-Authenticate`: Server yêu cầu client xác thực.

---

✅ **2. Content Header**

- `Content-Type`: Xác định loại dữ liệu trong body (ví dụ: `application/json`).
- `Content-Length`: Kích thước dữ liệu trong body (tính bằng bytes).
- `Content-Encoding`: Xác định kiểu nén dữ liệu.

---

✅ **3. Caching Header**

- `Cache-Control`: Quản lý cách dữ liệu được lưu trữ trên client và server, ví dụ: thời gian hết hạn.

---

✅ **4. CORS Header**

- `Access-Control-Allow-Origin`: Xác định nguồn (domain) được phép truy cập API.

---

✅ **5. Security Header**

- Đảm bảo bảo mật trong các request/response, ví dụ như `Strict-Transport-Security` để yêu cầu HTTPS.