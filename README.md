# KOA TS Quickstart

A simple koa ts quickstarter

# Documentation

### Prerequisites

1. docker and docker compose (lastest version) [Docker](https://www.docker.com/) & [Docker-Compose](https://docs.docker.com/compose/)

### commands to get you started

1. Clone this repo and go to project folder.
2. create [.env](#sample-.env) file in config directory
3. `npm install` (install packages locally, since we don't mount node_modules in container)
4. `npm run build:docker`
5. `npm run start:docker`

A collection of useful commands which might be helpful

### Logs

1. `npm run logs`

### Linting / Code prettify

1. `npm run lint`
2. `npm run lint:fix`
3. `npm run format:check`
4. `npm run format:fix:all`

### Run tests

1. `npm run test`

### Debug

1. uncomment following line from docker-compose.yml

```
#- --inspect-brk=0.0.0.0
```

2. create launch.json in .vscode folder, and copy following code

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Docker: Attach to Node",
      "port": 9229,
      "address": "localhost",
      "localRoot": "${workspaceFolder}/src",
      "remoteRoot": "/api/src",
      "protocol": "inspector"
    }
  ]
}
```

### Sample .env

```
NODE_ENV=local
PORT=4001
API_KEY_SENDGRID=XXX
API_KEY_MAILGUN=XXX
MAILGUN_DOMAIN=xxx
```
