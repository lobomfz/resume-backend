FROM node:18
WORKDIR /app
COPY ./ /app/

RUN npm install

EXPOSE 3333
ENTRYPOINT npm start
