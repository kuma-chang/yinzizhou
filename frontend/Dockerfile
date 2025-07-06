FROM node:22-alpine

WORKDIR /frontend

COPY package.json .
RUN npm i

COPY . .

RUN npm run build
