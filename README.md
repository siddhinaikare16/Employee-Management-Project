# Employee Management System (EMS)
A task management dashboard built with React and Tailwind CSS. An admin can create tasks and assign them to employees, and each employee can log in to see their own tasks and task counts.

# Teach Stack
React (Vite)
Tailwind CSS
Context API (shared data across components)
Browser localStorage (no backend, data is saved in the browser)

# Features
-Login for two roles: admin and employee, with email and password check
Stay logged in after refresh (login is remembered in localStorage)

-Admin dashboard
Create a task (title, date, category, description) and assign it to an employee
Table showing every employee with their New, Active, Completed and Failed task counts

-Employee dashboard
Greeting with the employee's name
Four colored boxes with Active, New, Completed and Failed counts
Horizontally scrollable task cards, styled differently for each task status

-Log out button on both dashboards

# Demo Login

These are test accounts that come with the sample data.

Role	    Email	              Password

Admin	    admin@example.com	    123

Employee	employee1@example.com	123

# Known Issues
-Task buttons do not work yet. "Accept Task", "Mark as Completed" and "Mark as Failed" have no click handler.

-Task assignment depends on exact name typing. In CreateTask, the employee name must match exactly (for example "Arjun", not "arjun"). If it does not match, nothing happens and the form still clears. A dropdown of employees would fix this.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

