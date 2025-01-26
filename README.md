# Uber API Documentation

## Overview
This documentation provides details about the user-related endpoints in the Uber API, including registration, login, logout, and profile retrieval. Each endpoint's request and response formats are described below.

## Endpoints

### 1. Register User
**Endpoint:** `/register`  
**Method:** `POST`  
**Description:** Registers a new user.

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Response:**
- **201 Created**
  ```json
  {
    "user": {
      "_id": "user_id",
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com"
    },
    "msg": "User registered successfully"
  }
  ```
- **400 Bad Request**
  ```json
  {
    "msg": "Please fill all fields"
  }
  ```
  ```json
  {
    "msg": "Email already registered"
  }
  ```
- **500 Internal Server Error**
  ```json
  {
    "msg": "Server Error"
  }
  ```

### 2. Login User
**Endpoint:** `/login`  
**Method:** `POST`  
**Description:** Logs in an existing user.

**Request Body:**
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Response:**
- **200 OK**
  ```json
  {
    "token": "jwt_token",
    "user": {
      "_id": "user_id",
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com"
    }
  }
  ```
- **400 Bad Request**
  ```json
  {
    "msg": "Please fill all fields"
  }
  ```
  ```json
  {
    "msg": "Invalid username or password"
  }
  ```
- **500 Internal Server Error**
  ```json
  {
    "msg": "Server Error"
  }
  ```

### 3. Logout User
**Endpoint:** `/logout`  
**Method:** `POST`  
**Description:** Logs out the current user.

**Response:**
- **200 OK**
  ```json
  {
    "msg": "user log out successfully"
  }
  ```

### 4. Get User Profile
**Endpoint:** `/profile`  
**Method:** `GET`  
**Description:** Retrieves the profile of the logged-in user.

**Response:**
- **200 OK**
  ```json
  {
    "msg": "user profile fetched"
  }
  ```
- **401 Unauthorized**
  ```json
  {
    "msg": "unauthorized"
  }
  ```

## Models

### User Model
- **firstName**: String, required, minimum length 2
- **lastName**: String, minimum length 2
- **email**: String, required, unique
- **password**: String, required, select: false
- **socketID**: String

### Blacklist Model
- **token**: String, required, unique
- **createdAt**: Date, default: Date.now, expires: 86400 seconds

## Middleware

### Auth Middleware
**Function:** `authUser`  
**Description:** Authenticates the user by verifying the JWT token and checking if the token is blacklisted.

## Error Handling
All endpoints return appropriate HTTP status codes and error messages in case of failures.
