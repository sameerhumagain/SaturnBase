# Use official Python image
FROM python:3.11

# Set working directory inside the container
WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the Django app files, ensuring 'manage.py' is included
COPY SaturnBase /app/SaturnBase

# Expose Django development port
EXPOSE 8000

# Command to start Django server (used by concurrently)
CMD ["python", "/app/SaturnBase/manage.py", "runserver", "0.0.0.0:8000"]
