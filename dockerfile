FROM node:lts-alpine
WORKDIR /srv/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 1800
ENV NODE_ENV=production
CMD ["nodemon", "index.js"]
