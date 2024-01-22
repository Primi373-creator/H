FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  npm i pm2 -g && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .

COPY . .
EXPOSE 10000
CMD ["pm2 start index.js && pm2 save && pm2 logs"]
