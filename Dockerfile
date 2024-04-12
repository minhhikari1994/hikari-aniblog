FROM arm64v8/node:20-alpine
LABEL org.opencontainers.image.authors="Minh Hikari <minhhikari1994+dev@outlook.com>"

ADD .output/ /app
WORKDIR /app

EXPOSE 3000
CMD ["node", "./server/index.mjs"]
