# Stage 1: Build stage
FROM node:16 AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the backend files
COPY . .

# Stage 2: Production stage
FROM node:16-slim

# Set the working directory for the production image
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=build /app /app

# Expose the port the backend app will run on
EXPOSE 5000

# Command to run the backend app
CMD ["node", "server.js"]
