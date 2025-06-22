# 🏥 Medication Management System

A full-stack Medication Management System for patients and caretakers. The app allows users to register/login, manage medications, view adherence stats, upload medication proof, and monitor medication status with role-based dashboard.

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
Home Page:
![Screenshot (37)](https://github.com/user-attachments/assets/efe21c09-dab9-4b17-bf48-02a4296a90f4)
Patient Dashboard:
![Screenshot (38)](https://github.com/user-attachments/assets/e3e2beb7-244d-4a95-97f6-0adfe181cb43)
CareTaker Dashboard:
![Screenshot (39)](https://github.com/user-attachments/assets/651b1cc8-ab4a-4517-ade9-4eb9d1a51a15)




## 🛠 Tech Stack

| Layer     | Technologies                                  |
|-----------|-----------------------------------------------|
| Frontend  | React, React Router, Tailwind CSS, Axios, React Query |
| Backend   | Node.js, Express, SQLite, JWT, bcrypt,        |
| Auth      | JWT-based Authentication                      |
| Testing   | Vitest, React Testing Library                 |
        

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
'http://localhost:5173'
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
