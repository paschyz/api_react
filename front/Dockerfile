
FROM node:16-bullseye

WORKDIR /app

COPY package*.json ./

# Install dependencies
RUN npm install --force

COPY . .

RUN npm run build

EXPOSE 5000

CMD ["npm", "run", "dev"]
