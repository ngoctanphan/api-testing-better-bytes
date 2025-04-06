## **📚 Lesson 07: WebSocket with Postman**

---

### 🔌 1. Kết nối CSDL trên Visual Studio Code

- Cài đặt extension: **`Database Client JDBC`**
- Dùng để truy cập và thao tác với cơ sở dữ liệu trực tiếp trên VS Code.

---

### 📄 2. API Document là gì?

**API Document** là tài liệu mô tả cách sử dụng API trong quá trình phát triển phần mềm.

### 🎯 Mục đích:

- 👩‍💻 Giúp developers và testers hiểu rõ cách giao tiếp với API.
- ⏳ Tiết kiệm thời gian trao đổi giữa các team.
- 🧩 Đảm bảo tính nhất quán xuyên suốt dự án.

### 🛠️ Các công cụ phổ biến để viết API Doc:

- 📝 Microsoft Word, Excel
- 🌐 Swagger (OpenAPI)
- 📊 Postman’s API tab

---

### ⚙️ 3. Các tính năng nâng cao trong Postman (Postman Advanced Features)

| 🔧 Tính năng | 📝 Mô tả |
| --- | --- |
| 🧬 **Flows** | Tạo chuỗi các request theo logic (low-code). |
| 📘 **APIs** | Quản lý document & versioning API. |
| 🧪 **Mock Server** | Mô phỏng response mà không cần server backend thực. |
| 📈 **Monitor** | Theo dõi hiệu suất API theo thời gian. |

---

### 🌐 4. WebSocket là gì?

**WebSocket** là giao thức giúp truyền thông tin **hai chiều** giữa client và server thông qua **một kết nối TCP duy nhất**.

### 🧠 Đặc điểm:

- 🔄 **Kết nối liên tục** (Persistent)
- ⚡ **Giảm độ trễ** so với các giao thức như HTTP
- 🔊 **Hỗ trợ real-time**: chat, game online, thông báo, livestream

### 🔁 Cách hoạt động:

1. **Handshake ban đầu**: thông qua giao thức HTTP (`Upgrade` header).
2. **Chuyển sang kết nối WebSocket**: `ws://` hoặc `wss://` (bảo mật).

---

### 🔍 5. So sánh WebSocket và HTTP

| 📌 **Tiêu chí** | 🌐 **HTTP** | 🔄 **WebSocket** |
| --- | --- | --- |
| Mô hình | Request-response (phản hồi theo yêu cầu) | Giao tiếp liên tục, 2 chiều |
| Kết nối | Không liên tục (mỗi lần request là một kết nối mới) | Kết nối giữ nguyên xuyên suốt |
| Header | Mỗi request gửi đầy đủ header | Không cần lặp lại header |
| Tốc độ | Chậm hơn do handshake nhiều lần | Nhanh và tối ưu hơn |
| Ứng dụng | Web tĩnh, API không cần realtime | Chat, thông báo, game realtime |