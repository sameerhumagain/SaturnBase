# Use official Node.js image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the React app files
COPY . .

# Install concurrently globally (if not installed)
RUN npm install -g concurrently

# Expose React development port
EXPOSE 5173

# Run both React and Django servers
CMD ["concurrently", "\"npm run dev\"", "\"npm run start-django\""]
