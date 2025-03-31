Project Setup Guide
This guide will walk you through the steps to set up and run the project locally using Docker.

Prerequisites
Before getting started, make sure you have the following installed on your local machine:

Docker Desktop (Ensure Docker Desktop is running)

Docker Compose (Included with Docker Desktop)

Steps to Get Started
Step 1: Clone the Repository
Start by cloning the repository to your local machine. Use the following command to clone the project:

git clone <repository-url>
Step 2: Build and Start Docker Containers
Once the repository is cloned, navigate to the project directory in your terminal:

cd <project-directory>
Make sure Docker Desktop is running, then use the following command to build and start the containers:

docker-compose up --build
This command will build the Docker images and start the services defined in the docker-compose.yml file.

Step 3: Access MySQL Inside the Container
After the containers are up and running, you need to access MySQL within the Docker container:

Go to the Exec tab in Docker Desktop (or use the terminal).

Run the following command to log in to MySQL:
mysql -u root -p
Enter the following password when prompted:
myrootpassword

Step 4: Create User and Grant Privileges in MySQL
If the user myuser does not already exist in the MySQL database, you need to create it and grant the necessary privileges.

In the MySQL shell, run the following commands:

sql

CREATE USER IF NOT EXISTS 'myuser'@'%' IDENTIFIED BY 'yourpassword';
GRANT ALL PRIVILEGES ON CreationNepal.* TO 'myuser'@'%';
FLUSH PRIVILEGES;
Replace yourpassword with a secure password for myuser.

Step 5: Set Up Database Migrations
Step 5.1: Create Migration Files
Run the following command to create the migration files. For Django projects:
python manage.py makemigrations

Step 5.2: Apply Migrations
Next, apply the migrations to set up the database schema:
python manage.py migrate
