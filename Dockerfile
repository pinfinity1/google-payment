# Build Stage
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# # Build the frontend
# RUN npm run build
#
# # Serve Stage
# FROM nginx:alpine
#
# # Remove default NGINX config
# RUN rm /etc/nginx/conf.d/default.conf
#
# # Copy the NGINX configuration file
# COPY nginx.conf /etc/nginx/conf.d/
#
# # Copy built frontend files to NGINX's serving directory
# COPY --from=build /app/dist /usr/share/nginx/html
#
# # Expose port 80
# EXPOSE 80
#
# # Start NGINX
# CMD ["nginx", "-g", "daemon off;"]