# Use the official Node.js LTS (Alpine) image as the base image
FROM node:lts-alpine

# Set the working directory to /usr/src/app
WORKDIR /usr/src/app

# Install system dependencies
RUN apk --no-cache add \
    ffmpeg \
    imagemagick \
    wget \
    git

# Copy package.json and yarn.lock to the working directory
COPY package.json ./

# Install Node.js dependencies with production dependencies only
RUN yarn install --network-concurrency 1

# Copy all files to the working directory
COPY . .

# Install 'forever' globally
RUN npm install -g forever

# Expose port 10000
EXPOSE 10000

# Command to start the application using 'forever'
CMD ["forever", "index.js"]
