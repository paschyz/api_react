FROM node:18-alpine

WORKDIR /


COPY . .
RUN ls -la
RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
