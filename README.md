# Todo Backend API

This is a simple Todo backend API that allows users to manage their tasks. The API supports user authentication and task management.

## Features

### User Authentication & Authorization:
- **Register**
- **Log in**
- **Log out**
- **View Profile data** (name and email)
- **Cookie-based authentication** (using cookie-parser)
- **Encrypted password** (using bcrypt)

### Task Management:
- **Create a new task**
- **Read (retrieve) a task**
- **Update a task**
- **Delete a task**

### Task Attributes:
- **Title**
- **Description**
- **isCompleted** (true or false)

## Example API Endpoints

### User Authentication:
- **Register**: `POST /api/auth/register`
- **Log in**: `POST /api/auth/login`
- **Log out**: `GET /api/auth/logout`
- **View Profile**: `GET /api/auth/profile`

### Task Management:
- **Create a new task**: `POST /api/tasks/new`
- **List tasks created by the logged-in user**: `GET /api/tasks/my`
- **Update the status of a task**: `PUT /api/tasks/:id`
- **Delete a task**: `DELETE /api/tasks/:id`

## Getting Started

### Prerequisites
- Node.js
- npm

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/shashankaz/todo_api.git
   cd todo_api
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the server:
   ```sh
   npm start
   ```

## API Usage

### User Authentication

#### Register
- **URL**: `/api/auth/register`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "yourpassword"
  }
  ```

#### Log in
- **URL**: `/api/auth/login`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "email": "john.doe@example.com",
    "password": "yourpassword"
  }
  ```

#### Log out
- **URL**: `/api/auth/logout`
- **Method**: `GET`

#### View Profile
- **URL**: `/api/auth/profile`
- **Method**: `GET`

### Task Management

#### Create a new task
- **URL**: `/api/tasks/new`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "title": "New Task",
    "description": "Task description"
  }
  ```

#### List tasks created by the logged-in user
- **URL**: `/api/tasks/my`
- **Method**: `GET`

#### Update the status of a task
- **URL**: `/api/tasks/:id`
- **Method**: `PUT`

#### Delete a task
- **URL**: `/api/tasks/:id`
- **Method**: `DELETE`
