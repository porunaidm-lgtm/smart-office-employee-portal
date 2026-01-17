| Assignment 6 |   # 🏢 Smart Office Employee Portal


A role-based Employee Management Portal built using React + Redux Toolkit (Frontend) and Node.js + Express (Backend).


This project demonstrates authentication, authorization, role-based UI rendering, and protected routing without using a database (Phase-1).


---


## ✨ Features


### 🔐 Authentication & Authorization

- JWT-based login system

- Role-based access control (ADMIN / EMPLOYEE)

- Protected routes

- Auto redirect based on role

- Session persistence using `localStorage`


### 👨‍💼 Roles & Permissions


| Role | Access |

|-----|------|

| ADMIN | Dashboard, Attendance, Tasks, Employee Profiles |

| EMPLOYEE | Own Profile only |


---


## 🖥️ Frontend Features (React)


- Modern dashboard UI

- Role-based Sidebar & Navbar

- Employee profile cards & detailed profile view

- Attendance list with pagination & filters

- Tasks list with pagination & search

- Clean reusable components

- Redux Toolkit for global state

- React Router v6


---


## 🧩 Backend Features (Node.js + Express)


- JWT authentication

- Admin & Employee login

- Middleware-based route protection

- Role authorization middleware

- In-memory employee data (No DB – Phase-1)


---


## 📂 Project Structure


smart-office-employee-portal/

│

├── backend/

│ ├── src/

│ │ ├── data/

│ │ │ └── employees.data.js

│ │ ├── middleware/

│ │ │ ├── authMiddleware.js

│ │ │ └── authorize.js

│ │ ├── routes/

│ │ │ ├── authRoutes.js

│ │ │ └── employeeRoutes.js

│ │ ├── utils/

│ │ │ └── generateToken.js

│ │ └── server.js

│ └── .env

│

├── frontend/

│ ├── src/

│ │ ├── components/

│ │ │ ├── layout/

│ │ │ ├── profile/

│ │ │ └── common/

│ │ ├── features/

│ │ │ ├── auth/

│ │ │ └── employees/

│ │ ├── pages/

│ │ ├── routes/

│ │ ├── styles/

│ │ └── utils/

│ └── main.jsx

│

└── README.md




---


## 🔑 Login Credentials


### 🔐 Admin Login

Email : admin@test.com

Password : 123456



### 👤 Employee Login

Email : arun.kumar@company.com

Password : any value (password ignored – Phase-1)



> Employee login automatically redirects to their own profile page.


---


## 🚦 Application Flow


1. User logs in

2. JWT token generated and stored

3. Redux state updated

4. Role-based redirect:

   - ADMIN → `/dashboard`

   - EMPLOYEE → `/profile/:id`

5. Sidebar & Navbar update dynamically based on role

6. Protected routes block unauthorized access


---


## 🔒 Route Protection Logic


- JWT verified using `authMiddleware`

- Role checked using `authorize(roles)`

- Frontend protected using `RoleRoute` wrapper


Example:

```js

router.get(

  "/attendance",

  authMiddleware,

  authorize(["ADMIN"]),

  getAttendance

);

🎨 UI & Styling

Custom CSS (no UI library)
Modern green theme (Smart Office branding)
Responsive layout
Active menu highlighting
Pagination UI
Status badges (Active / Inactive)


🚀 How to Run the Project

🔹 Backend

cd backend

npm install

npm run dev

🔹 Frontend

cd frontend

npm install

npm run dev

Frontend URL:
http://localhost:5173

Backend URL:
http://localhost:5000
