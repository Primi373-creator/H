# Build Stage
FROM node:lts-buster as builder

WORKDIR /app

COPY package.json .
RUN yarn install

# Runtime Stage
FROM node:lts-alpine

WORKDIR /app

RUN apk --no-cache add \
    ffmpeg \
    imagemagick \
    webp \
    && npm i forever -g

COPY --from=builder /app/node_modules /app/node_modules
COPY . .

CMD ["forever", "index.js"]
