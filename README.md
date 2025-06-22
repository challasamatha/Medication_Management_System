# 🏥 Medication Management System

A full-stack Medication Management System for patients and caretakers. The app allows users to register/login, manage medications, view adherence stats, upload medication proof, and monitor medication status with role-based dashboards.

---

## 🚀 Live Demo

Frontend: [Vercel Live Link](#)  
Backend API: [Render Live Link](#) *(if deployed)*

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
- **File Upload**:
  - Upload proof of medication
- **Real-Time Updates**:
  - Medication list updated every 10 seconds (polling)
- **Notification Preferences** (UI only)
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
| Deployment| Vercel (Frontend), Render (Backend)           |

---

## 📁 Project Structure

