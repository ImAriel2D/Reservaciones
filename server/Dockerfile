FROM node:10.16-alpine

# Create App Directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install Dependencies
COPY package*.json ./

ENV NODE_ENV=production

RUN npm install --silent

# Copy app source code
COPY . .

# Exports
EXPOSE 4000

CMD ["npm", "start"]