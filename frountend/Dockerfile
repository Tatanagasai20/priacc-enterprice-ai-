# Use a lightweight Node.js image to build the app
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build

# Use a lightweight web server to serve the built app
FROM nginx:alpine

# Remove default static files
RUN rm -rf /usr/share/nginx/html/*

# Copy build output from builder
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port for frontend (React app runs on port 80 via NGINX)
EXPOSE 80

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
