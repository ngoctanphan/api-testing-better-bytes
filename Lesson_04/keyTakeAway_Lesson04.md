## **📚Lesson 4: Postman Advanced - API Testcases**

### 🔹 **Postman Collection & Environment**

- **Collection**: Tập hợp các request có thể sử dụng lại.
- **Environment**: Nơi tạo **biến môi trường** có thể sử dụng lại trong collection (ví dụ: base URL, API key...).

---

### ✅ **Checklist cho một API Testcase**

🔍 Khi kiểm thử API, cần đảm bảo kiểm tra các yếu tố sau:

1. **Functional Testing** → API hoạt động đúng chức năng mong đợi.
2. **Status Codes** → Đảm bảo mã trạng thái HTTP đúng (200, 400, 401, 500...).
3. **Data Validation** → Kiểm tra dữ liệu trả về có đúng định dạng, giá trị mong đợi không.
4. **Authentication/ Authorization** → Đảm bảo API yêu cầu xác thực đúng.
5. **Performance** → API có phản hồi nhanh, ổn định không.
6. **Security** → Kiểm thử các lỗ hổng bảo mật như:
    - **XSS** (Cross-Site Scripting)
    - **CORS** (Cross-Origin Resource Sharing)
    - **SQL Injection**
7. **Edge Cases** → Kiểm tra với dữ liệu đặc biệt, ranh giới (vd: giá trị cực lớn, cực nhỏ...).
8. **Compatibility** → API có hoạt động tốt trên nhiều nền tảng khác nhau không?

---

### 🔁 **Vòng lặp trong JavaScript**

🔹 **1. Vòng lặp `for`**

Dùng khi biết trước số lần lặp hoặc cần duyệt qua mảng với chỉ số cụ thể.

📌 **Ví dụ:** Lặp từ 1 đến 5 và in ra số đó

```jsx
for (let i = 1; i <= 5; i++) {
    console.log("Số:", i);
}
// Output: 1, 2, 3, 4, 5
```

---

### 🔹 **2. Vòng lặp `while`**

Dùng khi số lần lặp phụ thuộc vào một điều kiện thay đổi trong quá trình chạy.

📌 **Ví dụ:** Lặp cho đến khi biến `count` đạt 5

```jsx
let count = 1;
while (count <= 5) {
    console.log("Count:", count);
    count++;
}
// Output: 1, 2, 3, 4, 5
```

---

### 🔹 **3. Vòng lặp `do ... while`**

Dùng khi **cần đảm bảo** mã chạy **ít nhất một lần** trước khi kiểm tra điều kiện.

📌 **Ví dụ:**

```jsx
let x = 10;
do {
    console.log("Giá trị của x:", x);
    x++;
} while (x < 5);
// Output: Giá trị của x: 10
// (Chỉ chạy 1 lần vì điều kiện kiểm tra sau)
```

---

### 🔹 **4. Vòng lặp `for ... of`**

Dùng để duyệt qua **mảng hoặc chuỗi**, chỉ quan tâm giá trị từng phần tử.

📌 **Ví dụ với mảng:**

```jsx
const colors = ["🔴", "🟢", "🔵"];
for (const color of colors) {
    console.log(color);
}
// Output: 🔴, 🟢, 🔵
```

📌 **Ví dụ với chuỗi:**

```jsx
const name = "JavaScript";
for (const char of name) {
    console.log(char);
}
// Output: J, a, v, a, S, c, r, i, p, t
```

---

### 🔹 **5. Vòng lặp `for ... in`**

Dùng để duyệt qua **các thuộc tính của đối tượng (object)**.

📌 **Ví dụ:**

```jsx
const user = { name: "Alice", age: 25, job: "Developer" };
for (const key in user) {
    console.log(key, ":", user[key]);
}
// Output:
// name : Alice
// age : 25
// job : Developer
```

---

### 🎯 **Tóm lại:**

| Loại vòng lặp | Khi nào dùng? |
| --- | --- |
| **for** | Khi biết trước số lần lặp |
| **while** | Khi số lần lặp phụ thuộc vào điều kiện |
| **do ... while** | Khi muốn chạy ít nhất một lần trước khi kiểm tra điều kiện |
| **for ... of** | Khi duyệt qua **mảng** hoặc **chuỗi** |
| **for ... in** | Khi duyệt qua **thuộc tính của object** |