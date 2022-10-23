FROM node:lts-alpine

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 6663

RUN npm run build

CMD ["node", "build/server.js"]