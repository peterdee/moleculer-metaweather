FROM node:current-alpine

ENV NODE_ENV=production

RUN mkdir /app
WORKDIR /app

COPY package.json package-lock.json ./

RUN echo "Here here"

RUN docker pull nats:latest

RUN npm install --production

COPY . .

CMD ["npm", "start"]
