FROM node:lts as build-stage
WORKDIR /app
COPY ./ /app/

RUN npm install

EXPOSE 3333
ENTRYPOINT npm start
