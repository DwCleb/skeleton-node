# skeleton-node

Here we using Yarn <3

## dependencies
- express
- sequelize
- bcryptjs
- jsonwebtoken
- yup
- multer

## dev dependencies
- sucrase
- nodemon
- eslint - airbnb
- prettier
- eslint-config-prettier
- eslint-plugin-prettier
- sequelize-cli

## environment
- docker

```
yarn install
```
-> initializing docker:

```
docker run --name skeleton -e POSTGRES_PASSWORD=docker -p 5342:5342 -d postgres

```
```
docker start skeleton
```
after created database 'skeleton':
```
yarn sequelize db:migrate
```

```
yarn start
```

Go!


