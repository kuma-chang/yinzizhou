FROM node:22-alpine As build

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json into the container
COPY package*.json package-lock.json ./

# Install dependencies using npm
RUN npm ci 

# Copy the project files into the working directory
COPY ./ ./

# Build the React app for production
RUN npm run build


################################
#### PRODUCTION ENVIRONMENT ####
################################

# Use the official NGINX image for production
FROM nginx:stable-alpine as production

# copy nginx configuration in side conf.d folder
COPY --from=build /usr/src/app/nginx/nginx.conf /etc/nginx/nginx.conf

# Copy the build output from the dist folder into the Nginx html directory
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Expose port 80 to allow access to the app
EXPOSE 80

# Run Nginx in the foreground
ENTRYPOINT ["nginx", "-g", "daemon off;"]
