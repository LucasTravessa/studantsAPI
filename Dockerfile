FROM node:16.20

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install


COPY . .

EXPOSE 8080
CMD ["sh", "./start.sh"]