FROM node:10.15.1-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 80
EXPOSE 4001
EXPOSE 4002
EXPOSE 4003
EXPOSE 5858

ENTRYPOINT ["./entrypoint.sh"]
CMD ["node", "./bin/server"]
