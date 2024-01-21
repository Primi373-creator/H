FROM node:lts-buster

RUN  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .

RUN yarn install

COPY . .

EXPOSE 10000

RUN npm install -g forever

CMD ["forever", "index.js"]
