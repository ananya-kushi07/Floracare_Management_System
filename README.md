# Floracare Management System

Floracare Management System is a full-stack application designed to help manage plant care activities, gardening tools, containers, fertilizers, and maintenance records. It is built with a React + Vite frontend and a Node.js (Express) backend, using a modular and extendable architecture.

## Features

- **Plant Maintenance Tracking**: Record and view all plant maintenance activities (watering, fertilizing, etc.) including dates and notes.
- **Tool Management**: Catalog gardening tools with details such as type, power source, and images.
- **Container Management**: Maintain an inventory of plant containers, including material, size, color, and images.
- **Fertilizer Tracking**: Manage types of fertilizers, their expiry dates, quality levels, and reference images.
- **User Authentication & Role-based Access**: Secure routes and features based on user roles such as admin, coordinator, volunteer, etc.
- **Local Storage Helpers**: Store and retrieve user and app data locally on the frontend for enhanced performance.
- **Modern Frontend Stack**: Built with React (Vite), Redux Toolkit for state management, and ESLint for code quality.
- **RESTful API Design**: Separate controllers and models for clean backend logic.
- **Mock Data Fallback**: When a database is unavailable, mock data is used for seamless development and testing.

## Project Structure

```
floracare-frontend/   # React + Vite frontend
  └── src/
      ├── helpers/          # Local storage and navigation helpers
      ├── redux/            # Redux store and reducers
      └── ...               # UI components and routes

backend/              # Node.js (Express) backend
  └── src/
      ├── controllers/      # API route controllers
      ├── models/           # Data models for tools, containers, plants, fertilizers
      ├── middlewares/      # Auth and authorization logic
      ├── routes/           # API endpoints
      └── helpers/          # Utility functions
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ananya-kushi07/Floracare_Management_System.git
   cd Floracare_Management_System
   ```

2. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   # Setup environment variables and database as needed
   ```

3. **Install frontend dependencies:**
   ```bash
   cd ../floracare-frontend
   npm install
   ```

### Running the Application

- **Backend:**
  ```bash
  cd backend
  npm start
  ```

- **Frontend:**
  ```bash
  cd floracare-frontend
  npm run dev
  ```

The backend server will run on its specified port (commonly 5000 or 3001) and the frontend on [http://localhost:5173](http://localhost:5173) by default.

## API Overview

- `/api/tools` - Manage gardening tools
- `/api/containers` - Manage containers
- `/api/maintenance` - Plant maintenance records
- `/api/fertilizers` - Fertilizer inventory
- **Authentication endpoints** for user login and role management

## Contributing

Contributions are welcome! Please fork the repo and submit a pull request. For major changes, open an issue first to discuss what you would like to change.

## License

This project is for educational purposes and currently does not include a license. Please contact the author for usage questions.

---

**Author:** [ananya-kushi07](https://github.com/ananya-kushi07)
