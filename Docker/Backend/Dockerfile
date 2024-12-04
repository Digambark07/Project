# Step 1: Use Node.js image for the backend
FROM node:18-alpine

# Step 2: Set working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to install dependencies
COPY Backend/package.json ./
COPY Backend/package-lock.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the backend application code
COPY Backend/ .

# Step 6: Copy the .env file into the container
COPY Backend/.env .env  

# Step 7: Expose the backend server port (5000)
EXPOSE 5000

# Step 8: Run the backend server
CMD ["npm", "start"]
