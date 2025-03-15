# Angular 19 Authentication App

## 🧾 General Info

This is web application built with Angular 19 that demonstrates **registration, login, and role-based authentication** using a mock backend with JSON Server. Admins can manage user access and assign roles, while users can interact with the system based on their assigned permissions.

---

## ⚙️ Technologies Used

- **Angular** v19 
- **Angular Material**  
- **Node.js** v22.14.0 
- **JSON Server**  
- **ngx-toastr** 

---

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/bathish03/Authentication-RoleBased.git
cd Authentication-RoleBased
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start JSON Server

In the project root, run:

```bash
json-server --watch db.json
```

### 4. Run the Angular App

```bash
ng serve
```

Then navigate to:

```
http://localhost:4200
```

The app will automatically reload if you make any source changes.

---

## 🔐 Credentials

You can use the following accounts to log in:

### 👤 Admin User

- **Username**: `mhmdb`
- **Password**: `71923687`

### 👤 Regular User

- **Email**: `rawanb`
- **Password**: `123456`

---

## ✨ Features

- ✅ User registration and login with JSON Server  
- ✅ Role-based authentication (admin/user access control)  
- ✅ Admin can assign roles to users  
- ✅ Add, edit, and delete access is restricted based on role  
- ✅ Responsive UI with Angular Material and toast alerts
