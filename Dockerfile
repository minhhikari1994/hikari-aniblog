FROM node:20-alpine
LABEL org.opencontainers.image.authors="Minh Hikari <minhhikari1994+dev@outlook.com>"

ADD .output/ /app
WORKDIR /app/server

RUN npm install --cpu=x64 --os=linux sharp && npm install --cpu=x64 --os=linux --libc=musl sharp
WORKDIR /app

EXPOSE 3000
CMD ["node", "./server/index.mjs"]
