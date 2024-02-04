# Use an official Node.js runtime as a parent image
FROM node:16-bullseye

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

# Expose port 5000 to the outside world
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
