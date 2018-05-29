# React Single Repo Example

This is an example repository to show how you could have an API and React client in the same repositories.

## Installation

1. `yarn && cd client && yarn`

## Local Development

Locally, you may run the following command:

```bash
npm run dev
```

This will run both the client and server on different ports. You will be prompted to go to `3000`.

## Production Development

To test as a production build, you may run the following command:

```bash
npm start
```

This will build a new version of the client into a `build/` folder. It will then run the server which will deliver the client. In this case, you will want to go to port `3004` by default.

## Deployment

To deploy to Heroku, you simply need to run:

```bash
heroku create
git push heroku master
```

The `postinstall` script will make sure all relevant packages are installed.
