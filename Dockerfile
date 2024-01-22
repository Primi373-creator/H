FROM node:lts-alpine

# Install system dependencies
RUN apk --no-cache add ffmpeg imagemagick webp

# Set the working directory
WORKDIR /app

RUN   npm i forever -g

# Copy the application code and pre-installed node_modules.
COPY . .

EXPOSE 10000
# Define the command to run your app
CMD ["forever", "index.js"]
