
# Uber Server

## API Documentation

### Base URL

```
http://localhost:3000/api/v1
```

### Endpoints

#### Register User

- **URL:** `/users/register`
- **Method:** `POST`
- **Description:** Registers a new user.
- **Request Body:**
  ```json
  {
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com",
      "password": "password123"
  }
  ```
- **Success Response:**
  - **Code:** `201 Created`
  - **Content:**
    ```json
    {
        "_id": "60d0fe4f5311236168a109ca",
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com",
        "password": "$2a$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36FJ6L/8w5v5z5z5z5z5z5z5z",
        "socketID": null,
        "__v": 0,
        "msg": "User registered successfully"
    }
    ```
- **Error Responses:**
  - **Code:** `400 Bad Request`
    - **Content:**
      ```json
      {
          "msg": "Please fill all fields"
      }
      ```
  - **Code:** `400 Bad Request`
    - **Content:**
      ```json
      {
          "msg": "Email already registered"
      }
      ```
  - **Code:** `500 Internal Server Error`
    - **Content:**
      ```json
      {
          "msg": "Server Error"
      }
      ```

#### Login User

- **URL:** `/users/login`
- **Method:** `POST`
- **Description:** Logs in an existing user.
- **Request Body:**
  ```json
  {
      "email": "john.doe@example.com",
      "password": "password123"
  }
  ```
- **Success Response:**


  - **Code:** `200 OK`


  - **Content:**
    ```json
    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
        "user": {
            "_id": "60d0fe4f5311236168a109ca",
            "firstName": "John",
            "lastName": "Doe",
            "email": "john.doe@example.com",
            "socketID": null,
            "__v": 0
        }
    }
    ```
- **Error Responses:**
  - **Code:** `400 Bad Request`
    - **Content:**
      ```json
      {
          "msg": "Please fill all fields"
      }
      ```
  - **Code:** `400 Bad Request`
    - **Content:**
      ```json
      {
          "msg": "invalid username or password"
      }
      ```

## Running the Server

To run the server, use the following command:

```sh
npm run dev
```
```

Piyushrathoree: generate a file named as readme . md and then put all the generated data into that file

GitHub Copilot: ```markdown


# Uber Server

## API Documentation

### Base URL

```
http://localhost:3000/api/v1
```

### Endpoints

#### Register User

- **URL:** `/users/register`
- **Method:** `POST`
- **Description:** Registers a new user.
- **Request Body:**
  ```json
  {
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com",
      "password": "password123"
  }
  ```
- **Success Response:**
  - **Code:** `201 Created`
  - **Content:**
    ```json
    {
        "_id": "60d0fe4f5311236168a109ca",
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com",
        "password": "$2a$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36FJ6L/8w5v5z5z5z5z5z5z5z",
        "socketID": null,
        "__v": 0,
        "msg": "User registered successfully"
    }
    ```
- **Error Responses:**
  - **Code:** `400 Bad Request`
    - **Content:**
      ```json
      {
          "msg": "Please fill all fields"
      }
      ```
  - **Code:** `400 Bad Request`
    - **Content:**
      ```json
      {
          "msg": "Email already registered"
      }
      ```
  - **Code:** `500 Internal Server Error`
    - **Content:**
      ```json
      {
          "msg": "Server Error"
      }
      ```

#### Login User

- **URL:** `/users/login`
- **Method:** `POST`
- **Description:** Logs in an existing user.
- **Request Body:**
  ```json
  {
      "email": "john.doe@example.com",
      "password": "password123"
  }
  ```
- **Success Response:**
  - **Code:** `200 OK`
  - **Content:**
    ```json
    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
        "user": {
            "_id": "60d0fe4f5311236168a109ca",
            "firstName": "John",
            "lastName": "Doe",
            "email": "john.doe@example.com",
            "socketID": null,
            "__v": 0
        }
    }
    ```
- **Error Responses:**
  - **Code:** `400 Bad Request`
    - **Content:**
      ```json
      {
          "msg": "Please fill all fields"
      }
      ```
  - **Code:** `400 Bad Request`
    - **Content:**
      ```json
      {
          "msg": "invalid username or password"
      }
      ```

## Running the Server

To run the server, use the following command:

```sh
npm run dev
```
```