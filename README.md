# CHAIRLIFT

# Architecture, ERD, State and Architecture Diagrams
- https://github.com/pehlaj-rai-10p/fullstack-chairlift/tree/master/uml

## Backend
- Node JS, TypeScript

## Frontend
- Android

## Database
- PostGreSQL

## ChairLift Postman Collection
https://documenter.getpostman.com/view/8258162/SWECVEik?version=latest

## Android Repo:
https://github.com/pehlaj-rai-10p/chairliftandroid


## APIs Deployed on AWS
- http://ec2-44-231-55-15.us-west-2.compute.amazonaws.com/

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
PORT=80
API_KEY_SENDGRID=XXX
API_KEY_MAILGUN=XXX
MAILGUN_DOMAIN=xxx
```

