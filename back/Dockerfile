FROM node:18-alpine


COPY package*.json ./
RUN ls -la
RUN npm i

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
