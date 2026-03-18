# CyberSec Site Backend

Robust Node.js + Express + MongoDB REST API for the CyberSec Site.

## Features

- **Authentication**: JWT-based auth with register, login, and profile management
- **Task Management**: CRUD operations for tasks with status tracking
- **Calendar Events**: Full CRUD with recurring events support
- **Email Notifications**: Nodemailer integration for sending emails
- **Security**: Helmet, CORS, rate limiting, input validation
- **Error Handling**: Global error handler with environment-aware responses

## Project Structure

```
backend/
├── config/
│   └── db.js              # MongoDB connection
├── controllers/
│   ├── authController.js  # Auth logic
│   ├── taskController.js  # Task CRUD
│   ├── calendarController.js  # Calendar CRUD
│   └── emailController.js # Email sending
├── middleware/
│   └── authMiddleware.js  # JWT verification
├── models/
│   ├── User.js            # User schema
│   ├── Task.js            # Task schema
│   └── CalendarEvent.js   # Calendar event schema
├── routes/
│   ├── authRoutes.js      # /api/auth
│   ├── taskRoutes.js      # /api/tasks
│   ├── calendarRoutes.js  # /api/calendar
│   └── emailRoutes.js     # /api/email
├── .env                   # Environment variables (DO NOT COMMIT)
├── .env.example           # Environment template
├── package.json           # Dependencies
└── server.js              # Express app entry point
```

## Setup

### Prerequisites

- Node.js >= 18.x
- MongoDB Atlas account or local MongoDB

### Installation

```bash
cd backend
npm install
```

### Configuration

1. Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

2. Fill in your environment variables:

- `MONGODB_URI` - Your MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_USER`, `EMAIL_PASS` - SMTP credentials, `EMAIL_RECEIVER` - Email address to receive contact form submissions, `EMAIL_SECURE` - TLS/SSL setting for SMTP

### Run the Server

```bash
npm run dev     # Development mode with nodemon
npm start       # Production mode
```

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/me` | Get current user profile (protected) |
| PUT | `/api/auth/profile` | Update user profile (protected) |

### Tasks

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks (protected) |
| GET | `/api/tasks/:id` | Get single task (protected) |
| POST | `/api/tasks` | Create new task (protected) |
| PUT | `/api/tasks/:id` | Update task (protected) |
| DELETE | `/api/tasks/:id` | Delete task (protected) |

### Calendar

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/calendar` | Get all calendar events (protected) |
| GET | `/api/calendar/:id` | Get single event (protected) |
| POST | `/api/calendar` | Create new event (protected) |
| PUT | `/api/calendar/:id` | Update event (protected) |
| DELETE | `/api/calendar/:id` | Delete event (protected) |

### Email

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/email/send` | Send an email (protected) |

## Security Measures

- **Helmet**: Sets secure HTTP headers
- **CORS**: Configured for frontend origin only
- **Rate Limiting**: 100 requests per 15 minutes per IP
- **JWT Authentication**: Secure token-based auth
- **Input Validation**: All requests validated with Joi
- **Password Hashing**: bcrypt with salt rounds 12

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start production server |
| `npm run dev` | Start development server with nodemon |
| `npm test` | Run tests |
