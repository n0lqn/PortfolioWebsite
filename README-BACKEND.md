# Setup Guide: Cooper Cookbook Backend

# Setup Guide: Cooper Cookbook Backend

## Prerequisites
- **Docker Desktop** (Recommended for the full-stack environment)
- **Java Development Kit (JDK) 17+** (Required if running the backend outside of Docker)
- **Maven** (Required if running the backend outside of Docker)

## Option 1: Docker (Recommended)
This is the fastest way to get the full stack (UI, App, and Database) running.

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/n0lqn/ECE366CooperCookbook
   cd ECE366CooperCookbook
   ```

2. **Start the Environment:**
   ```bash
   docker compose up -d --build
   ```

3. **Stop/Restart the Environment:**
   ```bash
   docker compose down
   docker compose up -d
   ```
   *Access the UI at: **http://localhost:5173***

## Option 2: Local Backend (Without Docker)
1. **Navigate to the Backend:**
   `cd ECE366CooperCookbook` (assuming you have a local SQL DB ready)

2. **Run the Backend:**
   `./mvnw spring-boot:run`

3. **Confirm Port:**
   By default, the backend will listen on **port 8080**.

---
*If you receive a connection error or a "backend not found" message, verify that the Spring Boot server is active on port 8080 or that Docker containers are running.*
