# Virtual Assistant (MERN) - README

A fully functional **MERN-based Virtual Assistant** capable of answering queries, managing tasks, performing automation, and providing a smooth conversational UI. The project is deployed on **Render** (both frontend and backend).

---

## 🚀 Live Demo
- **URL:** https://virtual-assistant-3e6k.onrender.com


---

## 📌 Features
- Voice-based interaction
- Smart responses using AI/logic layer
- Backend API handling using Express.js & Node.js
- React-based UI with modern responsive design
- MongoDB integration for storing user data, preferences, chat history, etc.
- Deployed on **Render**

---

## 🛠️ Tech Stack
### **Frontend**
- React.js (Vite)
- Axios
- Context API 
- Tailwind CSS

### **Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- CORS, dotenv
- Render hosting

---

## 📂 Project Structure
```
Virtual-Assistant/
│
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── utils/
│   │   └── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## 🔧 Setup Instructions (Local Development)
### **1. Clone the Repository**
```bash
git clone https://github.com/sharad1666/Virtual-Assistant.git
cd Virtual-Assistant
```

### **2. Install Dependencies**
#### Frontend
```bash
cd frontend
npm install
```

#### Backend
```bash
cd backend
npm install
```

### **3. Create Environment Variables (.env)**
Backend `.env` example:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
ORIGIN=http://localhost:5173
```

---

## ▶️ Run the Project Locally
### Backend
```bash
cd backend
npm run dev
```

### Frontend
```bash
cd frontend
npm run dev
```

---

## ⭐ Author
**Sharad Yadav**  
GitHub: https://github.com/sharad1666

---



