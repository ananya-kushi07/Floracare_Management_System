# 🌿 Floracare Management System

Floracare is an all-in-one platform designed to revolutionize gardening management. From plant care and inventory tracking to advanced security and future-ready integrations, Floracare empowers gardeners, admins, and enthusiasts to nurture their green spaces with intelligence and ease.

---

## 🏆 Why Choose Floracare?

- Centralizes all gardening activities and resource management.
- Ensures secure, role-based access for users and admins.
- Provides a foundation for eco-friendly, data-driven gardening.
- Built for today’s needs—ready for tomorrow’s innovations.

---

## Objectives

- **Plant Maintenance Tracking**: Record and view all plant maintenance activities (watering, fertilizing, etc.) including dates and notes.
- **Tool Management**: Catalog gardening tools with details such as type, power source, and images.
- **Container Management**: Maintain an inventory of plant containers, including material, size, color, and images.
- **Fertilizer Tracking**: Manage types of fertilizers, their expiry dates, quality levels, and reference images.
- **User Authentication & Role-based Access**: Secure routes and features based on user roles such as admin, coordinator, volunteer, etc.
- **Local Storage Helpers**: Store and retrieve user and app data locally on the frontend for enhanced performance.
- **Modern Frontend Stack**: Built with React (Vite), Redux Toolkit for state management, and ESLint for code quality.
- **RESTful API Design**: Separate controllers and models for clean backend logic.
- **Mock Data Fallback**: When a database is unavailable, mock data is used for seamless development and testing.

---

## 🛠️ Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=mui&logoColor=white" alt="Material UI" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT" />
  <img src="https://img.shields.io/badge/bcrypt.js-123456?style=for-the-badge&logoColor=white" alt="bcrypt.js" />
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
</p>

---

## 🔒 Authentication, Security & Roles

- **User Registration/Login:** All users sign up with email and password. Passwords are securely hashed using bcrypt.js.
- **JWT-Based Sessions:** Secure, stateless authentication for all protected resources.
- **Role-Based Access:**  
  - **Admin:** Full control (add, update, delete plants/tools/fertilizers, assign resources, manage users).
  - **Gardener/User:** Restricted to their own data and assigned resources.
- **API Protection:** All sensitive routes require valid JWT and role checks.

---

## 📦 Example API Usage: Adding a Plant

**Endpoint:**  
`POST /plant/add`  
**Headers:**  
`Content-Type: application/json`  
`Authorization: Bearer <JWT_TOKEN>`

**Sample Request Body:**
```json
{
  "plant_name": "Aloe Vera",
  "species": "Aloe barbadensis",
  "date_planted": "2025-08-01",
  "location": "West Garden",
  "container_id": 3,
  "assigned_to": 2
}
```

**Response:**
```json
{
  "success": true,
  "message": "Plant added successfully",
  "plant_id": 17
}
```

---

## 🗄️ Database: Creation & Modification

**Create Database**
```sql
CREATE DATABASE floracare;
```

**Create Plants Table**
```sql
CREATE TABLE plants (
  plant_id INT AUTO_INCREMENT PRIMARY KEY,
  plant_name VARCHAR(100) NOT NULL,
  species VARCHAR(100),
  date_planted DATE,
  location VARCHAR(100),
  container_id INT,
  assigned_to INT,
  FOREIGN KEY (container_id) REFERENCES containers(container_id),
  FOREIGN KEY (assigned_to) REFERENCES gardeners(gardener_id)
);
```

**Modify Table Example (Add a new column for plant health status):**
```sql
ALTER TABLE plants ADD COLUMN health_status VARCHAR(50) DEFAULT 'Healthy';
```

---

## API Overview

- `/api/tools` - Manage gardening tools
- `/api/containers` - Manage containers
- `/api/maintenance` - Plant maintenance records
- `/api/fertilizers` - Fertilizer inventory
- **Authentication endpoints** for user login and role management

---

## 🎯 Key Features

- 🌱 **Plant Management:** Add, edit, remove, and monitor plants with detailed records.
- 🛠️ **Resource Allocation:** Assign tools, containers, and fertilizers to specific gardeners.
- 🧑‍🌾 **User & Admin Roles:** Distinct permissions to ensure security and data integrity.
- 🔒 **Robust Security:** JWT authentication and bcrypt password encryption.
- 📊 **Inventory & Maintenance Logs:** Track fertilizer expiry, tool usage, and maintenance activities.
- 🌍 **RESTful API:** Consistent, scalable endpoints for integration.
- 🏷️ **Database Normalization:** Structured, efficient storage in 3NF.

---

## 📂 Project Structure

```
Floracare_Management_System/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── server.js
│   └── .env
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── router/
    │   └── App.jsx
    └── vite.config.js
```

---

## 🚀 What’s Next? (Future Enhancements)

- 🛒 **Organic Marketplace:** Enable selling and buying of natural biofertilizers directly through the platform.
- 🌱 **IoT Integration:** Real-time sensor data for plant health, soil moisture, and automated notifications to users about plant conditions.
- 🔔 **Smart Reminders:** Task scheduling and care reminders powered by analytics.
- 📱 **Mobile App:** Native mobile experience for on-the-go gardening.
- 📊 **Analytics Dashboard:** Visual insights into plant growth, resource use, and gardening patterns.

---

## 👥 Contributors

- [Ananya K S](https://github.com/ananya-kushi07)
- Srishti Rai M

---

## Contributing

Contributions are welcome! Please fork the repo and submit a pull request. For major changes, open an issue first to discuss what you would like to change.

## License

This project is for educational purposes and currently does not include a license. Please contact the author for usage questions.

---

**Author:** [ananya-kushi07](https://github.com/ananya-kushi07)

<p align="center">
  <b>Floracare Management System</b> <br>
  <i>Smart. Secure. Sustainable gardening for everyone.</i>
</p>
