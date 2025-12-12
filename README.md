M-Pesa Based WiFi Billing System

A comprehensive WiFi billing system that enables users to purchase internet access via M-Pesa STK Push payments. Designed for cybercafés, small businesses, and public WiFi hotspots, this system integrates with MikroTik routers for secure MAC address-based access control.

🎯 Table of Contents

About the Project

Features

Tech Stack

System Architecture

Getting Started

Prerequisites

Installation

Environment Configuration

Database Setup

Running the Application

Usage

API Endpoints

Database Schema / ERD

Troubleshooting

Development

Contributing

Security

License

Support

Acknowledgments

🌍 About the Project

This project is a WiFi billing system that allows users to pay for internet access via M-Pesa STK Push. It’s ideal for:

Cybercafés

Small businesses

Public WiFi hotspots

The system uses React & Next.js for the frontend, Node.js + Express for the backend, and MySQL for database management. Automatic router integration is supported via MikroTik API.

✨ Features

M-Pesa Integration: Secure STK Push payments directly from user phones.

Time-Based Access: Flexible internet packages based on payment.

Admin Dashboard: Manage users, payments, and system settings.

MAC Address Whitelisting: Automatic router integration.

Real-Time Monitoring: Track sessions, payments, and system status.

Responsive Frontend: Modern React-based UI with dark/light themes.

Database Management: Prisma ORM with MySQL for reliable storage.

🛠️ Tech Stack

Backend: Node.js, Express.js, Prisma ORM
Frontend: Next.js, React, TypeScript, Tailwind CSS
Database: MySQL
Router Integration: MikroTik API
Payment Gateway: M-Pesa Daraja API
Authentication: JWT with bcrypt

🏗️ System Architecture
User Devices <--> WiFi Hotspot <--> Node.js API <--> MySQL Database
                                  |
                                  --> MikroTik Router (MAC Access)
                                  --> M-Pesa Payment Gateway

🚀 Getting Started
Prerequisites

Node.js (v16+)

npm (comes with Node.js)

MySQL Server (v8+)

Python 3.x (for hotspot login server)

M-Pesa Setup:

Register at Safaricom Developer Portal

Obtain Consumer Key, Consumer Secret, Passkey, Shortcode

MikroTik Router (Optional):

RouterOS v6+ with API access

Router credentials

Installation
git clone https://github.com/yourusername/Mpesa_WiFi_Billing.git
cd Mpesa_WiFi_Billing
npm install
cd frontend
npm install
cd ..

Environment Configuration

Create .env:

MPESA_CONSUMER_KEY=your_key
MPESA_CONSUMER_SECRET=your_secret
MPESA_PASSKEY=your_passkey
MPESA_SHORTCODE=your_shortcode
MPESA_CALLBACK_URL=http://localhost:5000/api/mpesa/callback

DATABASE_URL="mysql://username:password@localhost:3306/wifi_billing"
JWT_SECRET=your_jwt_secret
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin_pass
PORT=5000

MIKROTIK_HOST=your_router_ip
MIKROTIK_USERNAME=your_router_user
MIKROTIK_PASSWORD=your_router_password


Note: Do not commit .env to Git.

Database Setup
npx prisma migrate dev --name init
npx prisma generate
node scripts/addAdmin.js

Running the Application
Backend
npm start

Frontend
cd frontend
npm run dev

Hotspot Login Page
python -m http.server 8080 --directory hotspot

Usage
Users

Connect to WiFi.

Open browser → redirected to login page.

Select package and enter phone.

Complete M-Pesa STK Push payment.

Access granted automatically.

Admins

Login at http://localhost:3000/admin/login

Manage users, payments, sessions, and router settings.

API Endpoints

Payment

POST /api/pay → Initiate M-Pesa payment

POST /api/mpesa/callback → Payment callback

Admin

POST /api/admin/login → Login

GET /api/admin/payments → Payment records

GET /api/admin/users → User records

User

GET /api/packages → Available packages

GET /api/user/status → Access status

Database Schema / ERD
erDiagram
    USERS {
        UUID id PK
        VARCHAR username
        VARCHAR phone
        VARCHAR email
        VARCHAR password_hash
        DATETIME created_at
    }

    PACKAGES {
        UUID id PK
        VARCHAR name
        INT duration_minutes
        DECIMAL price
        DATETIME created_at
    }

    PAYMENTS {
        UUID id PK
        UUID user_id FK
        UUID package_id FK
        DECIMAL amount
        ENUM status "Pending, Success, Failed"
        VARCHAR mpesa_transaction_code
        DATETIME created_at
    }

    SESSIONS {
        UUID id PK
        UUID user_id FK
        VARCHAR mac_address
        DATETIME start_time
        DATETIME end_time
        BOOLEAN active
        DATETIME created_at
    }

    ADMIN_USERS {
        UUID id PK
        VARCHAR username
        VARCHAR password_hash
        VARCHAR role
        DATETIME created_at
    }

    ROUTERS {
        UUID id PK
        VARCHAR hostname
        VARCHAR ip_address
        INT port
        VARCHAR username
        VARCHAR password
        DATETIME created_at
    }

    LOGS {
        UUID id PK
        UUID user_id FK
        UUID admin_id FK
        VARCHAR action
        TEXT description
        DATETIME created_at
    }

    NOTIFICATIONS {
        UUID id PK
        UUID user_id FK
        VARCHAR type
        TEXT message
        BOOLEAN read
        DATETIME created_at
    }

    SETTINGS {
        UUID id PK
        VARCHAR key
        TEXT value
        DATETIME created_at
    }

    USERS ||--o{ PAYMENTS : "makes"
    USERS ||--o{ SESSIONS : "has"
    USERS ||--o{ NOTIFICATIONS : "receives"
    PACKAGES ||--o{ PAYMENTS : "included in"
    ADMIN_USERS ||--o{ LOGS : "performs"
    USERS ||--o{ LOGS : "triggers"
    ROUTERS ||--o{ SESSIONS : "manages"

Troubleshooting

Database Connection Error → Check MySQL & .env

Payment Failures → Check M-Pesa credentials & callback URL

Hotspot Login Not Working → Ensure Python server on port 8080

Frontend Build Errors → Clear .next cache & reinstall dependencies

Development

Backend: npm run dev

Frontend: cd frontend && npm run dev

Linting: cd frontend && npm run lint

Project Structure:

wifi_billing/
├── api/
├── config/
├── frontend/
├── hotspot/
├── middleware/
├── models/
├── prisma/
├── routes/
├── scripts/
└── index.js

Contributing

Fork repository

Create feature branch: git checkout -b feature-name

Commit changes: git commit -am 'Add feature'

Push: git push origin feature-name

Open Pull Request

Security

Change default admin credentials

Use HTTPS in production

Secure database access

Validate user input

Monitor API usage

License

This project is licensed under the MIT License - see LICENSE
.

Support

Email: mwakidenice@gmail.com

WhatsApp: Chat

Acknowledgments

African Tech Community

Open Source Libraries: Prisma, Tailwind CSS, Next.js, React

Contributors and testers

✅ Made with ❤️ in Africa for the World 🌍
