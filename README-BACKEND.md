# Setup Guide: Cooper Cookbook Backend

To connect the Cooper Cookbook frontend to the required local backend, follow these steps:

## Prerequisites
- Java Development Kit (JDK) 17 or higher
- Maven
- A running SQL database (configured in your environment)

## Backend Setup
1.  **Clone the Repository:**
    `git clone https://github.com/n0lqn/ECE366CooperCookbook`
    `cd ECE366CooperCookbook`

2.  **Configuration:**
    Ensure your `application.properties` (or `.env`) is configured with your SQL database credentials.

3.  **Run the Backend:**
    Run the following command to start the Spring Boot backend:
    `./mvnw spring-boot:run`

4.  **Confirm Port:**
    By default, the backend will listen on **port 8080**.

5.  **Access:**
    Once the backend is running, the frontend will automatically connect to it. Open your browser to the local development URL (usually provided by your frontend runner).

---
*If you receive a connection error or a "backend not found" message, verify that the Spring Boot server is active on port 8080.*
