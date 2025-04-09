# 📘 Dự án Next.js đơn giản

Dự án sử dụng Next.js với một API route cơ bản được thiết lập bằng **Route Handler** của Next.js App Router. API sẽ fetch dữ liệu từ `https://dummyjson.com/todos/random`.

---

## 📦 Cài đặt

Cài đặt các package cần thiết bằng npm:

```bash
npm install
```

## 🚀 Chạy server development

```bash
npm run dev
```

sau đó truy cập: http://localhost:4000


 ## API Endpoint
 ```bash
GET /api/todo
```
Endpoint này sẽ gọi tới API https://dummyjson.com/todos/random để lấy một công việc ngẫu nhiên và trả về kết quả dưới dạng JSON.
