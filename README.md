# NovaCart — React + Node Portfolio Project

A polished full-stack e-commerce portfolio project using React, Node.js/Express and MySQL.

## Features
- Premium responsive React UI
- Register / Login / Logout
- JWT authentication + bcrypt password hashing
- Product search, category filter and sorting
- Product details
- Cart with quantity controls and localStorage persistence
- Checkout and order creation
- User order history
- Admin dashboard
- Admin product CRUD
- Admin order status management
- MySQL database with automatic table creation
- Demo seed data

## Project structure
- `client` — React + Vite frontend
- `server` — Node.js + Express REST API

## Commands
### 1. Create database
Open MySQL and run:
```sql
CREATE DATABASE novacart;
```

### 2. Backend
```bash
cd server
npm install
copy .env.example .env
# edit .env with your MySQL username/password
npm run seed
npm run dev
```

### 3. Frontend
Open another terminal:
```bash
cd client
npm install
npm run dev
```

Frontend: http://localhost:5173
Backend: http://localhost:5000

### Demo admin
Email: admin@novacart.dev
Password: Admin@123

### Demo customer
Email: demo@novacart.dev
Password: Demo@123
