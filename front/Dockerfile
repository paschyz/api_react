# Use an official Node.js LTS (Long Term Support) version as a parent image
FROM node:16-bullseye

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

# Build the React Vite app
RUN npm run build

# Expose port 3000 to the outside world
EXPOSE 5000

# Command to run the application
CMD ["npm", "run", "dev"]
