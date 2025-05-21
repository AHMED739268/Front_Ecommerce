# 🛒 E-Commerce Frontend – Angular

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)


A complete **e-commerce frontend** built with **Angular**, designed to interact with a RESTful backend API (Node.js, Express.js, MongoDB). This user-friendly UI provides shopping, authentication, cart, checkout, and admin features.

---

## 📦 Features

### 👤 User Features
- 🔐 Register / Login (JWT)
- 👤 User Profile & Address Info
- 🔎 Product Search & Filter
- ❤️ Wishlist
- 🛒 Cart & Quantity Management
- 💳 Checkout with Payment Options
- 🧾 Order History & Tracking
- ⭐ Product Reviews
- 📱 Mobile Responsive Design

### 🛍️ Product Display
- 🧾 Category-wise Browsing
- 🖼️ Product Gallery & Zoom
- 📊 Stock & Rating Indicators
- 🔍 Sort by Price, Name, Rating

### 🔐 Admin Features
- 📦 Manage Products / Categories
- 👥 Manage Users / Sellers
- 📦 Manage Orders
- 💬 Approve/Delete Reviews
- 🏷️ Manage Promo Codes
- 🖼️ Upload Homepage Banners

---

## 🌐 API Backend

This project relies on the [E-Commerce Backend API](https://github.com/mostafamoknaa/MEAN-Project) which handles:

- Authentication
- Product listings
- Orders
- Reviews
- Cart/Wishlist
- Admin & Seller functionality

Make sure the backend is running and reachable. Configure the base URL in your `environment.ts` file:

```ts
export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:5000/api'  // Change this to your backend API base URL
};


📁 Project Structure
ecommerce-frontend/
├── src/
│   ├── app/
│   │   ├── components/        → Shared reusable components
│   │   ├── pages/             → Feature modules (home, cart, profile)
│   │   ├── services/          → API communication services
│   │   ├── guards/            → Auth and role-based guards
│   │   ├── models/            → Interfaces and types
│   │   ├── app-routing.module.ts
│   │   └── app.module.ts
│   └── assets/
│       └── images/
├── angular.json
└── environment.ts

⚙️ Installation & Setup
📋 Prerequisites

    Node.js & npm installed

    Angular CLI installed (npm install -g @angular/cli)

    Backend API is running (see backend setup)


git clone https://github.com/AHMED739268/Front_Ecommerce.git
cd ecommerce-frontend

# Install dependencies
npm install

# Run the app
ng serve

🚀 Build for Production

ng build --configuration=production
