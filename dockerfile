# Use a lightweight Node.js base image
FROM node:alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port (default React port is 3000)
EXPOSE 3000

# Start server
CMD ["npm", "start"]
