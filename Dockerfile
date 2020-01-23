FROM node:10.18.0

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 4001
EXPOSE 4002
EXPOSE 4003
EXPOSE 5858

ENTRYPOINT ["./entrypoint.sh"]
CMD ["node", "./bin/server"]
