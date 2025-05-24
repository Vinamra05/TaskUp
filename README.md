# TaskUp - Role Based Task Manager App 🚀

TaskUp is a team task management application built with **Node.js**, **Express.js**, **MongoDB**, and a **React + Tailwind CSS** frontend. This project is built with role-based access control where **Admins** can assign tasks and manage team members, while **Members** can view, mark, and create tasks.

---

## 🚀 Features

### 👨‍💼 Admin Capabilities:

* Add new users (members or admins using a secure token).
* Assign tasks to users.
* View all registered users.
* Delete users and their respective tasks.

### 🙋 Member Capabilities:

* Register/Login with authentication.
* View their tasks.
* Mark tasks as completed.
* Create new tasks.

### 📋 Task Fields:

* Title
* Description
* Due Date
* Priority (High, Medium, Low)
* Assigned User
* Status (Completed/Pending)

---

## 🧪 API Testing

A `test_apis.bat` file is included to test all available backend endpoints. To use it:

### ✅ Run the `.bat` script:

```bash
./test_apis.bat
```

If you encounter issues, install [jq](https://jqlang.org/download/) first.

### 🔗 Postman Collection:

[Click here to view and import the Postman collection](https://www.postman.com/security-architect-31714112/workspace/my-workspace/collection/40077172-c4b600a0-e6f7-4033-9f9d-4750e98f8d3c?action=share&creator=40077172)

---

## 🐳 Docker Support

To run the backend along with MongoDB using Docker:

### 🔧 Run using Docker Compose:

```bash
docker compose up --build
```

This will spin up both the Node.js backend and MongoDB containers seamlessly.

---

## 🧱 Tech Stack

* Backend: **Node.js**, **Express.js**, **MongoDB**
* Frontend: **React.js**, **Tailwind CSS**
* Dev Tools: **Docker**, **Postman**, **JWT**

---

## ⚙️ Project Setup

### 📦 Backend Setup:

```bash
cd backend
npm install
npm run dev
```

### 🌐 Frontend Setup:

```bash
cd frontend
npm install
npm run dev
```

Visit `http://localhost:5173` for frontend and `http://localhost:8000` for backend.

---

## 🧾 Environment Variables

Make sure to create a `.env` file inside the `backend/` directory with the following:

Here is a Drive Link for Accessing the Environment Varibales Go Through it: https://docs.google.com/document/d/18w-VA9zFPPP00S4BKldW5YuqAp56A9pT/edit?usp=sharing&ouid=104052691839938818023&rtpof=true&sd=true


```env
PORT
MONGO_URI
JWT_SECRET
ADMIN_INVITE_TOKEN
```

Also create a `.env` in the `frontend/` directory:

```env
VITE_REACT_APP_API_URL=http://localhost:8000
```

---

## 📁 Project Structure

```
TaskUp/
│
├── backend/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── .env
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── .env
│
├── docker-compose.yml
├── test_apis.bat
└── README.md
```

---

## 🔧 Current Status

* ✅ Backend is fully completed with all APIs.
* ⚠️ Frontend is in progress (basic UI ready, full features coming soon).
* ✅ Docker support added.
* ✅ API testing via `.bat` file and Postman collection.
* 🕐 Upcoming: UI polishing, full admin panel, task filters, user roles view, etc.

---

## 🤝 Contributing

If you'd like to contribute, feel free to fork this repo and make pull requests. More improvements and features are on the way!

---

## 📬 Author

**Vinamra Sharma**

* Email: [vinamrasharma0523@gmail.com](mailto:vinamrasharma0523@gmail.com)
* GitHub: [Vinamra05](https://github.com/Vinamra05)
* LinkedIn: [vinamra-sharma-84981a289](https://www.linkedin.com/in/vinamra-sharma-84981a289/)

---

> ⭐ If you like this project, give it a star on GitHub!

Stay tuned for more updates 🚀
