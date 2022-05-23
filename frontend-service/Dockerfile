#Stage 1: Build app
FROM node:14.17.6 as builder

# Step1: Set working directory
RUN mkdir web-app
WORKDIR /web-app

# Step2: Copy package.json to WORKDIR and install dependencies
COPY frontend-service/package*.json ./
RUN ls -l

# Step3: Install dependencies
RUN npm install

# Step4: Add source code files to WORKDIR
COPY frontend-service/. .
RUN ls -l

# Step5: Generate build of application
RUN npm run build

#Stage 2: Setup Server
FROM nginx:latest 

# Step6: Replace nginx.config with our custom config
COPY frontend-service/nginx/default.conf /etc/nginx/conf.d/default.conf

# Step7: Copy builded application source code
COPY --from=builder /web-app/dist/frontend-service /usr/share/nginx/html

# Step8: Expose nginx server port which is set into default.conf
EXPOSE 80

# Step9: Switch nginx deamon off
# Note: If your container serve multiple service than don't daemon off. 
CMD nginx -g "daemon off;"
