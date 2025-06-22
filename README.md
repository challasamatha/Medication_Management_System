# 🏥 Medication Management System

A full-stack Medication Management System for patients and caretakers. The app allows users to register/login, manage medications, view adherence stats, upload medication proof, and monitor medication status with role-based dashboards.

---

## 🚀 Live Demo

Frontend:   


---

## 🧩 Features

### ✅ Core Functionality

- **User Authentication** with role-based access (patient/caretaker)
- **Patient Dashboard**:
  - Greeting (dynamic based on time)
  - Day streak, Today's status
  - Medication adherence percentage
  - Today's medications
  - Medication calendar
- **Caretaker Dashboard**:
  - Adherence rate, streak
  - Missed & taken meds count
  - Overview & recent activity
  - Notifications UI
  - Quick actions
  - Monthly adherence
- **Medication Management**:
  - Add/view medications
  - Mark as taken
  - Adherence tracking
- **Real-Time Updates**:
  - Medication list updated every 10 seconds (polling)
- **Testing**:
  - Vitest-based unit tests

---

## 🛠 Tech Stack

| Layer     | Technologies                                  |
|-----------|-----------------------------------------------|
| Frontend  | React, React Router, Tailwind CSS, Axios, React Query |
| Backend   | Node.js, Express, SQLite, JWT, bcrypt,        |
| Auth      | JWT-based Authentication                      |
| Testing   | Vitest, React Testing Library                 |
| Deployment| Vercel (Frontend), Postman (Backend)          |

---

## 📁 Project Structure

medication-management-system/
│
├── backend/
│ ├── db/
│ ├── routes/
│ ├── middleware/
│ ├── uploads/
│ ├── server.js
│ └── package.json
│
├── frontend/
│ ├── src/
│ │ ├── api/
│ │ ├── components/
│ │ ├── context/
│ │ ├── pages/
│ │ ├── App.js
│ │ └── index.js
│ └── package.json
│
└── README.md


## ⚙️ Setup Instructions

### 📦 Backend Setup

```bash
cd backend
npm install
touch .env
# Add: JWT_SECRET=your_secret_key
node server.js


🚀 Deployment
🔹 Frontend – Vercel
Connect GitHub repo

Set build command: npm run build

Output directory: build

🔹 Backend – Postman
New Web Service
'http://localhost:5000/api'
Build command: npm install

Start command: node server.js

Add environment variable: JWT_SECRET


🙌 Contributors
Developer: Challa Samatha

Contact: samathachowdary2004@gmail.com
