const { env: environment = {} } = process;

module.exports = {
  AUTH_SECRET: environment.APP_AUTH_SECRET,
  DATABASE: {
    host: environment.DB_HOST,
    logging: environment.DB_LOGGING === 'true',
    name: environment.DB_NAME,
    password: environment.DB_PASSWORD,
    port: environment.DB_PORT,
    username: environment.DB_USERNAME,
  },
};
