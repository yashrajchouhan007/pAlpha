# Peacefully
[Deployed app](https://cra-express.herokuapp.com/)

## How to setup project on your local machine

Install [nodemon](https://github.com/remy/nodemon) globally

```
npm i nodemon -g
```

Install server and client dependencies

```
yarn install
cd client
yarn
```

To start the server and client at the same time (from the root of the project)

```
cd ..
yarn dev
```

Running the production build on localhost. This will create a production build, then Node will serve the app on http://localhost:5000

```
NODE_ENV=production yarn dev:server
```
