FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN npm install -g npm@10.5.0
RUN npm install
RUN npm install sharp

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]