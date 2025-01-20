# Stage 1: Build Stage
FROM node:16 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json into the working directory
COPY package.json /app/

# Install dependencies
RUN npm install

# Copy the rest of the application files into the container
COPY . /app/

# Stage 2: Production Stage
FROM node:16-slim

# Set the working directory inside the container
WORKDIR /app

#Executable Permissions
RUN chmod +x /app/node_modules/.bin/*


# Copy the built application files from the build stage
COPY --from=build /app /app

# Expose the port that the app will run on
EXPOSE 3000
# to of deselet the default browser 
ENV BROWSER=none

#CMD ["sh", "-c", "BROWSER=none npm start"] or add this in cmd 
#or refer the readme file to login to the container and install the browser 


# Command to start the app
CMD ["npm", "start"]
