## 📚 **Lesson 03: Authentication & Authorization**

### 🔐 1. Authentication vs. Authorization

### **🆔 Authentication (Xác thực người dùng)**

- ✅ Trả lời câu hỏi: **"Bạn là ai?"**
- 🔍 Là quá trình xác minh danh tính người dùng bằng các phương thức như:
    - 🔑 Nhập username và password
    - 🔗 Đăng nhập bằng Google, Facebook, v.v.
    - 🏆 Sử dụng vân tay, Face ID

### **🔑 Authorization (Phân quyền người dùng)**

- ✅ Trả lời câu hỏi: **"Bạn có quyền làm gì?"**
- 🎯 Xác định quyền truy cập tài nguyên sau khi đã xác thực thành công.
- 🔹 **Ví dụ:**
    - 👤 Người dùng bình thường chỉ có thể đọc dữ liệu.
    - 👑 Quản trị viên có quyền chỉnh sửa, xóa dữ liệu.

---

## 🌐 2. Session - Cookie Authentication

Phương thức xác thực có trạng thái (**Stateful Authentication**), trong đó server duy trì trạng thái đăng nhập.

- 🗄 **Session**: Lưu trên server, chứa thông tin đăng nhập của người dùng.
- 🍪 **Cookie**: Lưu trên client (trình duyệt), chứa Session ID để xác thực với server.

🔹 **Ví dụ:**

- 🏠 Khi bạn đăng nhập vào một trang web, server tạo một Session ID và gửi về trình duyệt dưới dạng cookie.
- 🔄 Khi bạn truy cập trang khác trên cùng trang web, trình duyệt gửi cookie chứa Session ID để xác thực bạn vẫn đang đăng nhập.

---

## 🔑 3. Token-Based Authentication

Token là chuỗi ký tự ngẫu nhiên dùng để xác thực người dùng, thường có thời gian sử dụng ngắn.

### **📌 Các loại token phổ biến:**

1. 🔹 **Session Token**: Dùng trong Session-Cookie Authentication.
2. 🔹 **Bearer Token**: Dùng trong **OAuth 2.0** để xác thực API request.
3. 🔹 **JWT (JSON Web Token)**: Một loại Bearer Token có format: `header.body.signature`
    
    🔹 **Ví dụ JWT:**
    
    ```
    Header: {
      "alg": "HS256",
      "typ": "JWT"
    }
    Payload: {
      "user_id": 123,
      "role": "admin"
    }
    Signature: Ký kết bảo mật
    
    ```
    

### **🔄 Refresh Token**

- Dùng để cấp mới **Access Token** khi nó hết hạn, giúp người dùng không cần đăng nhập lại.
- Thường có thời gian sống dài hơn Access Token.

🔹 **Ví dụ:**

- 🔑 Bạn đăng nhập vào một ứng dụng.
- ⏳ Sau một thời gian, **Access Token** hết hạn.
- 🔄 **Refresh Token** được dùng để cấp lại **Access Token** mới mà không cần yêu cầu đăng nhập lại.

### **🔐 API Key**

- 🔑 Giống token nhưng thường **không hết hạn** hoặc có thời gian hết hạn lâu hơn.
- 🛠 Dùng để cấp quyền truy cập API cho người dùng hoặc ứng dụng.

🔹 **Ví dụ:**

- 📌 API Key trong **GitHub Developer Settings** giúp ứng dụng bên thứ ba truy cập GitHub API.

---

## ⚡ 4. Các phương thức Authentication phổ biến

### **1️⃣ Session - Cookie Authentication**

- 🗄 Server lưu Session ID, client lưu trong cookie.

🔹 **Ví dụ:**

- 📱 Khi bạn đăng nhập vào Facebook, server lưu phiên đăng nhập của bạn và trình duyệt giữ cookie để duy trì trạng thái đăng nhập.

### **2️⃣ Basic Authentication**

- 🔐 Username và password được mã hóa bằng **Base64** và gửi kèm request.
- 📨 Header: `Authorization: Basic <base64-encoded-credentials>`

🔹 **Ví dụ:**

- 👤 Username: `admin`, Password: `123456`
- 🔑 Base64 Encode: `YWRtaW46MTIzNDU2`
- 📩 Header gửi đi:
    
    ```jsx
    Authorization: Basic YWRtaW46MTIzNDU2
    
    ```
    

### **3️⃣ API Key Authentication**

- 🔑 Dùng **API Key** trong request để xác thực.
- 📩 Header: `Authorization: Bearer <API_KEY>`

🔹 **Ví dụ:**

- 🔗 API Key trong GitHub Developer Settings:
    
    ```jsx
    Authorization: Bearer ghp_xxx12345xxx
    
    ```
    

---

📌 **Tóm tắt:**

- 🔐 **Authentication**: Xác thực danh tính người dùng.
- 🔑 **Authorization**: Cấp quyền cho người dùng sau khi xác thực.
- 🍪 **Session - Cookie Authentication**: Dựa vào trạng thái, server lưu Session ID.
- 🔄 **Token-Based Authentication**: Dùng token như JWT, API Key để xác thực không trạng thái (**Stateless Authentication**).
- ⚡ **Các phương thức Authentication phổ biến**: Session-Cookie, Basic Auth, API Key.

🔥 **Lưu ý:** Chọn phương thức phù hợp tùy theo nhu cầu bảo mật và hiệu suất của ứng dụng!