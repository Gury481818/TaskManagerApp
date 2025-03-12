# 📝 Task Manager App

## 📌 Overview
This **Task Manager App** is a **React-based project** that demonstrates the use of all major **React Hooks** to efficiently manage state, optimize performance, and implement global state management. The application allows users to **add, update, delete, and filter tasks**, while incorporating **dark mode, authentication, undo/redo functionality, and a shopping cart system**.

---

## 🚀 **Key Features**
✅ **Manage Tasks** - Add, edit, delete, and filter tasks (All, Completed, Pending).  
✅ **Dark Mode** - Toggle between light and dark mode using **`useContext`**.  
✅ **Authentication** - Simulated login/logout functionality with **global state management**.  
✅ **Undo/Redo** - Restore previous task state using **`useReducer`**.  
✅ **Shopping Cart** - Add/remove tasks to a simulated cart system.  
✅ **Performance Optimizations** - Use **`useMemo` and `useCallback`** to prevent unnecessary re-renders.  
✅ **Data Persistence** - Task list is stored in **local storage**.  

---

## ⚙️ **Implemented React Hooks**

### 🔹 `useState` vs `useReducer`
| Hook | Usage | Where Used? |
|------|-------|-------------|
| **`useState`** | Best for simple state updates | Form inputs (Title, Description) |
| **`useReducer`** | Best for complex state logic | Managing tasks, Undo/Redo |

### 🔹 `useEffect` (Handling Side Effects)
- **Auto-focus** the input field when the component mounts.
- **Display an alert** when tasks are updated.
- **Persist tasks in local storage** to save user data.

### 🔹 `useContext` (Global State Management)
- **Manage authentication** (Login/Logout).
- **Manage language preferences** (English/Spanish).
- **Enable dark mode** across components.

### 🔹 `useRef` (Managing References & Performance Optimization)
- **Auto-focuses** the task input field when the app loads.
- **Stores previous task values** without triggering re-renders.

### 🔹 `useMemo` (Performance Optimization)
- **Filters tasks efficiently** (All, Completed, Pending).
- **Prevents unnecessary recalculations** when filtering tasks.

### 🔹 `useCallback` (Optimizing Event Handlers)
- **Memoizes event handlers** (Add, Update, Delete tasks).
- **Prevents function recreation** on every render.

---

## 📁 **Project Structure**
