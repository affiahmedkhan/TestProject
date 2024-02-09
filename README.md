---

# Simple Angular App & .NET 6 Core API

This project includes an Angular application as the frontend and a .NET 6 Core API as the backend. Here are the steps to run each part of the application.

## Running the .NET 6 Core API

1. **Prerequisites**:
    - Ensure you have the .NET 6 SDK installed on your machine. You can download it from [the official .NET website](https://dotnet.microsoft.com/download/dotnet/6.0).

2. **Navigate to the API Project**:
    - Open a terminal or command prompt.
    - Navigate to the directory containing the .NET Core API project (`WebAPI` or similar).

3. **Run the API**:
    - In the terminal, execute the following command to run the API:
      ```sh
      dotnet run
      ```
    - `NOTE:` The API should start, listening on a local port `https://localhost:7206/`.
    -  Otherwise the API result may be not shown

## Running the Angular Application

1. **Prerequisites**:
    - Ensure you have Node.js installed on your machine. You can download it from [the official Node.js website](https://nodejs.org/).
    - Install the Angular CLI globally by running `npm install -g @angular/cli` in your terminal.

2. **Navigate to the Angular Project**:
    - Open a new terminal or command prompt window.
    - Navigate to the directory containing the Angular project.

3. **Install Dependencies**:
    - Run the following command to install the project dependencies:
      ```sh
      npm install
      ```

4. **Serve the Angular Application**:
    - Execute the following command to start the Angular development server:
      ```sh
      ng serve
      ```
    - Once the build is complete, the application will be available at `http://localhost:4200`.

Visit `http://localhost:4200` in your web browser to view the Angular application, which should now be able to communicate with the .NET 6 Core API running on `https://localhost:7206/`.

---
