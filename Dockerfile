FROM node:18-alpine

# Set the working directory to /usr/src/app
WORKDIR /usr/src/app

# Install system dependencies
RUN apk add --no-cache \
    ffmpeg \
    imagemagick \
    wget \
    git

# Copy package.json to the working directory
COPY package.json ./

# Install Node.js dependencies with production dependencies only
RUN yarn install --force --legacy-peer-deps

# Install global Node.js packages
RUN yarn global add forever

# Copy all files to the working directory
COPY . .

# Expose port 10000
EXPOSE 10000

# Use forever to start the application
CMD ["forever", "index.js"]
