# Step 1: Use Node.js image for building the React app
FROM node:18-alpine AS build

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json for dependency installation
COPY Frontend/package.json Frontend/package-lock.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application files
COPY Frontend/ ./

# Step 6: Build the React app for production
RUN npm run build

# Step 7: Use Nginx to serve the production build
FROM nginx:alpine

# Step 8: Remove default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Step 9: Copy your custom nginx.conf into the container
COPY Frontend/nginx.conf /etc/nginx/nginx.conf

# Step 10: Copy the build files from the previous stage into Nginx's public directory
COPY --from=build /app/build /usr/share/nginx/html

# Step 11: Expose port 80 for the web server
EXPOSE 80

# Step 12: Run Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
