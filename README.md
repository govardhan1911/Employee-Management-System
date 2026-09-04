Here is a concise summary of the documentation:

Employee Management System
A full-stack CRUD application for managing employees.

Tech Stack
Frontend: React 19, Vite, Bootstrap, React-Bootstrap

Backend: Spring Boot 4.1, Spring Data JPA, Lombok

Database: MySQL

Setup & Installation
Database Setup

Create database: CREATE DATABASE empweb;

Config (Backend/src/main/resources/application.properties): localhost:3306, user: root, pass: root (auto-creates tables).

Run Backend

PowerShell
cd Backend
mvnw.cmd spring-boot:run
Runs at: http://localhost:8080

Run Frontend

PowerShell
cd Frontend
npm install
npm run dev
Runs at: http://localhost:5173

Quick Reference
API Endpoints (http://localhost:8080)
GET /api/employees – List all

POST /api/employee – Create new

GET /api/employee/{id} – Get by ID

PATCH /api/employee/{id} – Update

DELETE /api/employees/{id} – Delete

Frontend Routes (http://localhost:5173)
/ – Dashboard

/employee – Add employee

/employee/{id} – Edit employee
