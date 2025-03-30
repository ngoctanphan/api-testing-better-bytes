## **📚Lesson 05: Postman Advanced (Part 2) - API Documentation**

### 🚀 1. Variable Level (Scope)

### 🎯 Mục tiêu:

- Hiểu các loại phạm vi biến (**Variable Scopes**) trong Postman.
- Sử dụng biến hiệu quả trong từng tình huống.

### 🔍 Nội dung chính:

- **🔹 Giới thiệu về biến trong Postman**: Giúp tái sử dụng dữ liệu như **URL, token, input values** trong các request.
- **📌 Các mức độ phạm vi (Scopes) của biến**:
    1. 🌍 **Global Variables**: Biến toàn cục, có thể truy cập từ mọi request.
    2. 📂 **Collection Variables**: Biến thuộc một **collection**, dùng chung trong collection đó.
    3. 🌱 **Environment Variables**: Biến thuộc về môi trường (**dev, staging, production**).
    4. 📄 **Data Variables**: Biến từ **file dữ liệu** khi chạy collection.
    5. ⚡ **Local Variables**: Biến tạm thời, chỉ tồn tại trong một request hoặc script.
- 🏆 **Thứ tự ưu tiên của biến**: **Local > Data > Environment > Collection > Global**.

### 🛠 Ví dụ:

1. **Tạo một Global Variable** `username = admin@betterbytesvn.com` → Sử dụng trong request.
2. **Tạo Collection Variable** `username = librarian@betterbytesvn.com` → Quan sát giá trị bị override.
3. **Tạo Environment Variable** `username = user@betterbytesvn.com` (cho môi trường Dev) → Quan sát sự thay thế giá trị.
4. **Chạy request với file CSV:**

```
username,password
hoai,123@123A
tan,123@123A
tu,123@123A
nga,123@123A
uyen,123@123A
vu,123@123A
linh,123@123A
thanh,123@123A
quan,123@123A
```

1. **Run collection authentication**, sử dụng file CSV trên để đăng ký tài khoản hàng loạt.

### 🎲 Postman Dynamic Variables

- Các biến **random** hỗ trợ kiểm thử API: https://learning.postman.com/docs/tests-and-scripts/write-scripts/variables-list/

---

## 🖥️ 2. Postman Scripts - Kịch bản trong Postman

### 🎯 Mục tiêu:

- Hiểu cách sử dụng **script** để tự động hóa trong Postman.
- Nắm rõ **Pre-request Script** và **Post-request Script**.

### 🛠 Nội dung chính:

- **Postman hỗ trợ JavaScript** để tùy chỉnh request:
    1. **📝 Pre-request Script**: Chạy **trước** khi request gửi đi.
    2. **✅ Post-request Script**: Chạy **sau** khi nhận response.

---

## ⚡ 2.1. Pre-request Script

### 🔍 Mô tả:

- **Chạy trước khi gửi request**, dùng để **tạo dữ liệu, thiết lập biến, kiểm tra điều kiện**.

### 🔹 Ứng dụng:

✅ **Sinh giá trị động** (*timestamp, token*)
✅ **Thiết lập biến** (global, collection, environment)
✅ **Gửi request để lấy token trước request chính**

### 🛠 Các đối tượng quan trọng:

- `pm.variables` → Quản lý biến (global, collection, environment).
- `pm.environment` → Thao tác với biến môi trường.
- `pm.collectionVariables` → Thao tác với biến collection.
- `pm.sendRequest` → Gửi request bổ sung.

### 📌 Ví dụ:

- **Tạo timestamp động và lưu vào biến môi trường**

```jsx
const timestamp = new Date().toISOString();
pm.environment.set("current_timestamp", timestamp);
console.log("Timestamp generated:", timestamp);
```

- **Gửi request lấy token trước request chính**

```jsx
pm.sendRequest({
    url: "https://api.example.com/auth",
    method: "POST",
    header: {"Content-Type": "application/json"},
    body: {
        mode: "raw",
        raw: JSON.stringify({username: "user", password: "pass"})
    }
}, (err, res) => {
    if (!err) {
        const token = res.json().access_token;
        pm.environment.set("auth_token", token);
    }
});
```

### 🎯 Thực hành:

1. **Tạo request GET** đến `https://jsonplaceholder.typicode.com/posts`
2. **Viết Pre-request Script** để tạo `random_id` (1 - 100)

```jsx
const randomId = Math.floor(Math.random() * 100) + 1;
pm.environment.set("random_id", randomId);

```

1. **Sử dụng biến trong URL**: `https://jsonplaceholder.typicode.com/posts/{{random_id}}`
2. **Gửi request và quan sát response**

---

## ✅ 2.2. Post-request Script (Tests)

### 🔍 Mô tả:

- **Chạy sau khi nhận response**, giúp kiểm tra, lưu dữ liệu hoặc xử lý logic tiếp theo.

### 🔹 Ứng dụng:

✅ **Kiểm tra response** (status code, dữ liệu trả về)
✅ **Lưu dữ liệu từ response vào biến**
✅ **Tạo báo cáo kết quả kiểm thử**

### 🛠 Các đối tượng quan trọng:

- `pm.response` → Truy cập response (status, JSON, text,...)
- `pm.test` → Viết kiểm thử (test assertions)
- `pm.expect` → So sánh kết quả mong đợi
- `pm.visualizer` → Hiển thị dữ liệu trực quan

### 📌 Ví dụ:

- **Kiểm tra status code và lưu dữ liệu từ response**

```jsx
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

const response = pm.response.json();
pm.environment.set("user_id", response.id);
console.log("User ID saved:", response.id);

```

- **Kiểm tra response có chứa field "email"**

```jsx
pm.test("Response contains name field", function () {
    const response = pm.response.json();
    pm.expect(response).to.have.property("name");
});

```

### 🎯 Thực hành:

1. **Tạo request GET** đến `https://jsonplaceholder.typicode.com/users/1`
2. **Viết Post-request Script** để:
    - ✅ Kiểm tra status code là `200`
    - ✅ Lưu `id` từ response vào biến môi trường `user_id`
    - ✅ Kiểm tra response có chứa trường `email`

```jsx
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

const response = pm.response.json();
pm.environment.set("user_id", response.id);

pm.test("Response has email", function () {
    pm.expect(response).to.have.property("email");
});
```

---

## 2.3. So sánh Pre-request và Post-response Script

| Tiêu chí | Pre-request Script 📝 | Post-respone Script ✅ |
| --- | --- | --- |
| Thời điểm chạy | Trước khi gửi request ⏳ | Sau khi nhận response 📩 |
| Mục đích chính | Chuẩn bị dữ liệu, thiết lập biến 🔄 | Kiểm tra response, lưu dữ liệu 🗃️ |
| Ví dụ sử dụng | Lấy token, tạo timestamp 🔑 | Kiểm tra status, trực quan hóa dữ liệu 📊 |

---

## 2.4. Xử lý chuỗi request liên tiếp (Chaining Requests) 🔗

### 🎯 Mục tiêu:

✔️ Hiểu cách sử dụng script trong Postman để gửi nhiều request nối tiếp nhau, trong đó request sau phụ thuộc vào kết quả của request trước.
✔️ Tự động hóa quy trình làm việc với API phức tạp.

### 📌 Nội dung chính:

✅ **Chaining Requests là gì?**: Kỹ thuật gửi một chuỗi request, trong đó dữ liệu từ response của request trước được sử dụng để gửi request tiếp theo.
✅ **Công cụ chính:**

- `pm.sendRequest` 🚀: Gửi request bổ sung từ script (dùng trong Pre-request hoặc Post-request Script).
- Biến (`environment/collection`) để truyền dữ liệu giữa các request 🔄.

### 🛠️ Ứng dụng:

- 📌 Lấy token xác thực trước, sau đó dùng token để gọi API khác.
- 📌 Tạo tài nguyên (POST), sau đó lấy chi tiết tài nguyên đó (GET).

### 🔄 Quy trình cơ bản:

1️⃣ Gửi request đầu tiên (thường trong Pre-request hoặc Post-request Script).
2️⃣ Lấy dữ liệu từ response (ví dụ: token, ID).
3️⃣ Sử dụng dữ liệu để gửi request tiếp theo.

---

## 🏆 Ví dụ:

### 📌 Tình huống: Gọi API đăng nhập để lấy token, sau đó dùng token để lấy danh sách người dùng.

### 📜 Script trong **Pre-request Script** (lấy token):

```jsx
pm.sendRequest({
    url: "https://api.example.com/login",
    method: "POST",
    header: {"Content-Type": "application/json"},
    body: {
        mode: "raw",
        raw: JSON.stringify({username: "admin", password: "pass123"})
    }
}, (err, res) => {
    if (!err && res.code === 200) {
        const token = res.json().access_token;
        pm.environment.set("auth_token", token);
        console.log("Token received:", token);
    } else {
        console.log("Error fetching token:", err || res.status);
    }
});
```

📌 **Request chính:**

```
GET https://api.example.com/users
Header: Authorization: Bearer {{auth_token}}
```

📌 **Kết quả:** Request chính sẽ sử dụng token từ biến `auth_token` để truy cập API.

### 📜 Script trong **Post-request Script** (chuỗi nhiều bước):

```jsx
// Bước 1: Lấy user_id từ response
const userId = pm.response.json().id;
pm.environment.set("new_user_id", userId);

// Bước 2: Gửi request GET để lấy thông tin user
pm.sendRequest({
    url: `https://api.example.com/users/${userId}`,
    method: "GET",
    header: {"Authorization": "Bearer " + pm.environment.get("auth_token")}
}, (err, res) => {
    if (!err && res.code === 200) {
        console.log("User details:", res.json());
    } else {
        console.log("Error fetching user:", err || res.status);
    }
});
```

---

## 🎯 Thực hành:

### 🔹 Chuẩn bị:

1️⃣ **Tạo một collection** với hai request:

- **Request 1:** POST đến `https://jsonplaceholder.typicode.com/posts` để tạo bài viết mới.

```json
{
  "title": "Test Post",
  "body": "This is a test",
  "userId": 1
}
```

- **Request 2:** GET đến `https://jsonplaceholder.typicode.com/posts/{{post_id}}`.

2️⃣ **Viết script trong Post-request Script của Request 1:**

```jsx
pm.test("Post created successfully", function () {
    pm.response.to.have.status(201);
});

const postId = pm.response.json().id;
pm.environment.set("post_id", postId);
console.log("New Post ID:", postId);

pm.sendRequest({
    url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
    method: "GET"
}, (err, res) => {
    if (!err && res.code === 200) {
        console.log("Post details:", res.json());
    } else {
        console.log("Error:", err || res.status);
    }
});
```

3️⃣ **Kiểm tra:**
✔️ Gửi **Request 1**, quan sát **console log** để xem dữ liệu từ cả hai request.
✔️ Gửi **Request 2** để xác nhận biến `post_id` hoạt động đúng.

---

## 🔥 Cách mở rộng:

🔹 **Sử dụng Collection Runner**: Kết hợp chaining với file dữ liệu để chạy chuỗi request cho nhiều bộ dữ liệu.
🔹 **Xử lý lỗi tốt hơn**:

```jsx
pm.sendRequest(..., (err, res) => {
    if (err || res.code !== 200) {
        pm.expect.fail("Request failed: " + (err || res.status));
    }
    // Tiếp tục xử lý
});
```

---

## 🎓 Lưu ý khi giảng dạy:

✅ **Giải thích từng bước**: Chia nhỏ quy trình (lấy dữ liệu → lưu biến → gửi request tiếp theo) để học viên dễ hiểu.
✅ **Thực hành là trọng tâm**: Sau mỗi ví dụ, yêu cầu học viên tự viết script để hiểu cách hoạt động.
✅ **Dùng console.log**: Khuyến khích học viên sử dụng `console.log` để debug và kiểm tra giá trị.
✅ **API công khai**: Sử dụng API như `jsonplaceholder.typicode.com` để thử nghiệm an toàn.

---

## 3. Visualization - Trực quan hóa dữ liệu trong Postman 📊

## Mục tiêu 🎯

- Học cách hiển thị dữ liệu response dưới dạng trực quan (bảng, biểu đồ).
- Tăng khả năng phân tích kết quả API.

## Nội dung chính 📌

### 3.1. Visualization là gì? 🖼️

- Tính năng cho phép hiển thị dữ liệu từ response theo cách dễ đọc hơn bằng cách sử dụng script.
- **Công cụ**: Sử dụng tab "Visualize" trong Postman, kết hợp với script trong tab "Tests".
- **Ngôn ngữ hỗ trợ**: JavaScript (dùng thư viện như Handlebars để tạo HTML).

### 3.2. Ví dụ 📝

- **Gửi request GET** đến API trả về dữ liệu order:
`https://bblib-dev-api.betterbytesvn.cloud/static/json/complex-data.json`
- **Trong tab "Tests"**, thêm script:
    
    ```jsx
    var template = `
      <style>
          table { width: 100%; border-collapse: collapse; }
          th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
          th { background-color: #f2f2f2; }
      </style>
      <table>
          <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Total Amount</th>
              <th>Status</th>
          </tr>
          {{#each orders}}
          <tr>
              <td>{{order_id}}</td>
              <td>{{customer.name}}</td>
              <td>{{total_amount}}</td>
              <td>{{status}}</td>
          </tr>
          {{/each}}
      </table>
    `;
    
    const responseData = pm.response.json();
    pm.visualizer.set(template, { orders: responseData });
    ```
    
- **Kết quả**: Response hiển thị dưới dạng bảng trong tab "Visualize".

## 3.3. Nên Visualize Dữ liệu thế nào trong Postman? 🤔

### Các yếu tố cần xem xét 📌

- **Loại dữ liệu**: Định tính (chuỗi, trạng thái) hay định lượng (số liệu, giá trị).
- **Mục đích**: So sánh, tổng hợp, hay hiển thị chi tiết.
- **Số lượng bản ghi**: Nhiều bản ghi cần tổng hợp hay ít bản ghi cần chi tiết.

### 3.4. Với loại dữ liệu nào, dùng kiểu visualize thế nào? 📊

### 🔹 Dạng Table (Bảng) 🗂️

**Phù hợp với:**

- Dữ liệu định tính hoặc hỗn hợp (chuỗi, số, trạng thái).
- Hiển thị chi tiết từng bản ghi hoặc danh sách đầy đủ.
- Dữ liệu có cấu trúc lồng nhau (nested) cần hiển thị phân cấp.

**Ví dụ từ file JSON:**

- Hiển thị danh sách đơn hàng với các cột: Order ID, Customer Name, Total Amount, Status.
- Hiển thị chi tiết sản phẩm (items) trong mỗi đơn hàng.

✅ **Ưu điểm**: Dễ đọc, phù hợp khi cần xem toàn bộ thông tin.
❌ **Nhược điểm**: Không hiệu quả khi dữ liệu quá lớn hoặc cần so sánh xu hướng.

### 🔹 Dạng Chart (Biểu đồ) 📈📉

**Phù hợp với:**

- Dữ liệu định lượng (số liệu như giá trị, số lượng).
- Tổng hợp và so sánh dữ liệu (ví dụ: tổng doanh thu theo trạng thái, số lượng sản phẩm bán ra).
- Dữ liệu cần phân tích xu hướng hoặc tỷ lệ.

**Ví dụ từ file JSON:**

- **Biểu đồ cột**: Tổng `total_amount` theo `status` (Shipped, Pending, Delivered, Processing).
- **Biểu đồ tròn**: Phân bố số lượng đơn hàng theo quốc gia của khách hàng (`customer.contact.country`).

✅ **Ưu điểm**: Trực quan, dễ thấy xu hướng hoặc tỷ lệ.
❌ **Nhược điểm**: Không hiển thị chi tiết từng bản ghi, cần thư viện bên ngoài (như Chart.js).

### 3.5. Template mẫu tương ứng 🏗️

### 📋 Template 1: Table - Danh sách đơn hàng cơ bản

**Mục đích**: Hiển thị toàn bộ thông tin đơn hàng dưới dạng bảng.

```jsx
var template = `
    <style>
        table { width: 100%; border-collapse: collapse; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
    </style>
    <table>
        <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Total Amount</th>
            <th>Status</th>
            <th>Order Date</th>
        </tr>
        {{#each orders}}
        <tr>
            <td>{{order_id}}</td>
            <td>{{customer.name}}</td>
            <td>{{total_amount}}</td>
            <td>{{status}}</td>
            <td>{{order_date}}</td>
        </tr>
        {{/each}}
    </table>
`;

const responseData = pm.response.json();
pm.visualizer.set(template, { orders: responseData });
```

✅ **Kết quả**: Bảng hiển thị 22 đơn hàng với các cột cơ bản.

---

## 4. Body Data Type - Các loại dữ liệu trong Body của Request 📑

## Mục tiêu 🎯

- Hiểu sự khác biệt giữa các loại dữ liệu trong phần Body của request.
- Biết khi nào nên sử dụng từng loại.

## Nội dung chính 📌

### 4.1. Form-data 📝

- **Mô tả**: Dùng để gửi dữ liệu dạng key-value, hỗ trợ cả file upload.
- **Ứng dụng**: Tải file lên server, gửi biểu mẫu HTML có file đính kèm.
- **Ví dụ**:
    - `Key: username, Value: john_doe`.
    - `Key: avatar, Value: (chọn file ảnh)`.

### 4.2. x-www-form-urlencoded 🔑

- **Mô tả**: Dữ liệu dạng key-value, được mã hóa URL, không hỗ trợ file.
- **Ứng dụng**: Gửi dữ liệu biểu mẫu đơn giản (không có file).
- **Ví dụ**:
    - `username=john_doe&password=12345` (trong Body).

### 4.3. Binary 📂

- **Mô tả**: Gửi dữ liệu nhị phân (file) mà không cần key-value.
- **Ứng dụng**: Tải lên file đơn lẻ (ảnh, video, PDF, v.v.).
- **Ví dụ**:
    - Chọn một file `.png` và gửi request `POST`.

## Thực hành 💡

- Tạo 3 request `POST` đến `https://postman-echo.com/post`:
    1. **Request 1**: Dùng `form-data` để gửi `name=John` và một file ảnh.
    2. **Request 2**: Dùng `x-www-form-urlencoded` để gửi `name=Jane`.
    3. **Request 3**: Dùng `binary` để gửi một file PDF.
- **Kiểm tra response** từ server để hiểu cách dữ liệu được xử lý.

🚀 *Tiếp tục khám phá Postman với các tính năng mạnh mẽ hơn!*