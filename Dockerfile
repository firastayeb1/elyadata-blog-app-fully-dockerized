FROM node:12.22

WORKDIR /app

COPY ./app/package.json .
COPY ./app/package-lock.json .

RUN npm install

COPY ./app/index.js .

CMD npm run start

EXPOSE 3000
