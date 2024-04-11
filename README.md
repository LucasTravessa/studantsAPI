# StudantsAPI

This is a comprehensive guide for the "StudantsAPI" project in node wit express, an example application that implements the basic CRUD (Create, Read, Update, Delete) operations for studants. The project includes a Dockerfile and Docker-compose to facilitate running it in containers.

## Information

- **Title**: StudantsAPI
- **Version**: 1.0
- **Host**: localhost:8080

## Prerequisites

Before getting started, make sure you have the following prerequisites installed on your system:

- [Node](https://nodejs.org/): Javascript runtime.
- [Express](https://expressjs.com/): Javascript Framework for REST api development.
- [Docker](https://www.docker.com/get-started): Docker is required if you wish to run the application in a container.

## Installation

Follow the steps below to install the project in your development environment:

1. **Clone the repository:**

   ```
   git clone https://github.com/LucasTravessa/studantsAPI.git
   ```

2. **Navigate to the project directory:**

   ```
   cd StudantsAPI
   ```

## Running the Application

After installation, you can run the StudantsAPI application with the following command:

```
docker compose up -d

npx prisma migrate dev --name init
```

The application will be accessible at `http://localhost:8080`.

## Testing the Application

The BankAPI application offers REST endpoints for creating, listing, updating, and deleting studants. You can use tools like [Bruno](https://www.usebruno.com/) to test the endpoints. Here are some `curl` command examples for testing the endpoints:

- **Create a studant:**

  ```
  curl -X POST -H "Content-Type: application/json" -d '{"name": "lucas travessa", "email": "lucas@lucas.com", "age": 12, "dob": "17/09/2002"}' http://localhost:8080/api/students
  ```

- **Update a studant:**

  ```
  curl -X PUT -H "Content-Type: application/json" -d '{"name": "João Silva","email": "lucas@lucas.com"}' http://localhost:8080/api/students/{studantId}
  ```

- **Delete a studant:**

  ```
  curl -X DELETE http://localhost:8080/api/students/{studantID}
  ```

Remember to adjust the commands according to your needs and requirements.

## Data Models

### request.studantRequest

Structure containing the required fields for creating a new studant.

- `email` (string, required): The studant's email (must be a valid email address).
- `name` (string, required): The studant's name (must be at least 4 characters and at most 100 characters).
- `age` (int, required): The studant's age.
- `dob` (string, required): The studant's date of birth.

### request.studantUpdateRequest

Structure containing fields to update studant information.

- `name` (string, required): The studant's name (must be at least 4 characters and at most 100 characters).
- `email` (string, required): The studant's email (must be a valid email address).
- `age` (int, required): The studant's age.
- `dob` (string, required): The studant's date of birth.

### response.studantResponse

Response structure containing studant information.

- `age` (int): The studant's age.
- `dob` (string): The studant's date of birth.
- `email` (string): The studant's email.
- `id` (string): The studant's unique ID.
- `name` (string): The studant's name.

## Endpoints

### Note

The API offers the following endpoints:

1. **POST /api/studentst**

   - Description: Create a new studant with the provided studant information.
   - Parameters:
     - `studantRequest` (body, required): studant information for registration.
   - Responses:
     - 200: OK (studant created successfully)

1. **PUT /api/studentst**

   - Description: Update a new studant with the provided studant information.
   - Parameters:
     - `studantRequest` (body, required): studant information for registration.
   - Responses:
     - 200: OK (studant created successfully)

1. **DELETE /api/students/{studantId}**

   - Description: Delete a studant based on the provided ID parameter.
   - Parameters:
     - `studantId` (path, required): ID of the studant to be deleted.
   - Responses:
     - 200: OK (studant deleted successfully)

1. **GET /api/students/{studantId}**

   - Description: Retrieve studant details based on the studant ID provided as a parameter.
   - Parameters:
     - `studantId` (path, required): ID of the studant to be retrieved.
   - Responses:
     - 200: studant information retrieved successfully

1. **GET /api/students**

   - Description: Retrieve all studants details.
   - Responses:
     - 200: studant information retrieved successfully
