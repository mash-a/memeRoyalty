module.exports = {
  development: {
      client: 'pg',
      connection: "postgres://masha:goddamit@localhost/memes",
      migrations: {
          directory: __dirname + '/db/migrations',
        },
      seeds: {
          directory: __dirname + '/db/seeds',
        },
    },
  production: {
      client: 'pg',
      connection: process.env.DATABASE_URL || "postgres://masha:goddamit@localhost/memes"   ,
      migrations: {
          directory: __dirname + '/db/migrations',
        },
      seeds: {
          directory: __dirname + '/db/seeds/production',
        },
    },
};
