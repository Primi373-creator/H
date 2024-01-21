# Use a minimal Node.js image from distroless
FROM gcr.io/distroless/nodejs:18

# Set the working directory to /usr/src/app
WORKDIR /usr/src/app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    ffmpeg \
    imagemagick \
    wget \
    git

# Copy package.json and yarn.lock to the working directory
COPY package.json 

# Install Node.js dependencies with production dependencies only
RUN yarn install  --production --network-concurrency 1

# Install global Node.js packages
RUN yarn global add forever

# Copy all files to the working directory
COPY . .

# Expose port 10000
EXPOSE 10000

# Use forever to start the application
CMD ["forever", "index.js"]
