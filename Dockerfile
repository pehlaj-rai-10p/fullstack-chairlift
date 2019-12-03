FROM node:12.13.1

WORKDIR /.

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 4001