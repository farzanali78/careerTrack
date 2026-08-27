# CareerTrack

CareerTrack is a job application tracking platform built with React.js and Tailwind CSS. It helps users keep track of the jobs they have applied for, including application details and their current status.

When applying to a large number of jobs, it can become difficult to remember where you applied, when you applied, and what stage each application is currently in. CareerTrack provides a centralized place to manage and monitor those applications.

## Features

### User Features

- User registration
- User login
- Add new job applications
- View all personal job applications
- Edit the status of an application
- Remove job applications
- View account information
- Change account password
- Permanently delete account
- Application data persistence using `localStorage`
- Responsive user interface
- Interactive UI animations and transitions

### Admin Features

CareerTrack also includes an admin portal within the same application.

Admin functionality includes:

* View all registered users
* View total number of registered users
* Remove registered users

The application determines which interface and actions are available based on the user's `isAdmin` status.

## Application Structure

CareerTrack uses a single frontend application with role based UI behavior.

### User Portal

Users have access to:

* **Home** — Main dashboard and application management interface
* **My Applications** — View and manage their logged job applications

Users can:

1. Register an account
2. Log in
3. Add job applications
4. View their applications
5. Update application statuses
6. Remove applications

### My Account

Users have access to a dedicated **My Account** page where they can:

- View their username
- View their email address
- Change their account password
- Permanently delete their account

Account deletion permanently removes the user's account and associated data from the application's local storage.

### Admin Portal

The admin uses the same application but receives different functionality based on the `isAdmin` property.

The admin can:

* View registered users
* View the total number of users
* Remove users

The admin account cannot be created through the registration system. It is predefined within the application.

## Admin Credentials

The current admin credentials are:

```text
ID: admin
Password: admin 1234
```

These credentials are intended for the current learning-project implementation.

## Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* JavaScript

### Libraries

* **Lucide** — Icons used throughout the interface
* **Hugeicons** — Additional iconography
* **Motion** — UI animations and transitions

### Data Storage

* Browser `localStorage`

No backend or external database is currently used.

## Key Concepts Demonstrated

This project was built as a frontend-focused learning project and demonstrates several important React concepts, including:

* React components
* Props and state management
* Conditional rendering
* Form handling
* Event handling
* Array methods
* CRUD operations
* Client-side authentication logic
* Role-based UI rendering
* `localStorage`
* Responsive design
* Tailwind CSS utility classes
* UI animations
* Icon libraries

## CRUD Functionality

CareerTrack implements CRUD-style functionality for job applications.

| Operation | Description                    |
| --------- | ------------------------------ |
| Create    | Add a new job application      |
| Read      | View saved applications        |
| Update    | Change an application's status |
| Delete    | Remove an application          |

Administrators also have delete functionality for registered users.

## Authentication

Authentication is currently handled entirely on the frontend.

User credentials and application-related data are stored in the browser using `localStorage`.

The application uses the stored user information to determine whether the currently logged-in account is a regular user or an administrator.

For example, the application can conditionally render different buttons, actions, and CTAs depending on whether the user has administrative privileges.

## Data Persistence

CareerTrack currently uses browser `localStorage` for data persistence.

This means that:

* User accounts are stored locally
* Login information is stored locally
* Job applications are stored locally
* Data remains available after refreshing the page
* Data is specific to the browser/device where it was created

Because there is no backend database, data is not synchronized between different devices or browsers.

## Future Improvements

A backend-focused phase is planned for future development.

Potential improvements include:

* Backend API
* JWT-based authentication
* Secure password hashing
* Database integration
* Server-side authentication and authorization
* Protected routes
* Secure admin authentication
* Cloud data persistence
* User data synchronization across devices
* Application search and filtering
* Application status categories
* Application statistics and analytics
* Job application deadlines and reminders
* Sorting applications by date or status

## Project Purpose

CareerTrack was created as a learning project to practice building a complete React frontend application around a practical real-world problem.

The project focuses on combining:

* React development
* UI/UX implementation
* Responsive design
* CRUD functionality
* Client-side authentication
* Role-based interfaces
* Local data persistence
* Modern frontend libraries

## License

This project is intended primarily as a learning project.
