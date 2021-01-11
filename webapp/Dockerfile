# Build react client
FROM node:10.16-alpine

# Working directory be app
WORKDIR /usr/src/app

ENV REACT_APP_ENV=prod

COPY . .

COPY package*.json ./

###  Installing dependencies
RUN npm install --silent
RUN npm run build
