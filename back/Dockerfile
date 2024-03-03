FROM node:16-bullseye

WORKDIR /app

COPY package*.json ./

RUN npm install > npm_install.log 2>&1

RUN cat npm_install.log


COPY . .

EXPOSE 3000

CMD ["npm", "start"]
