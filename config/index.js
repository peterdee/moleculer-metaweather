const { env: environment = {} } = process;

module.exports = {
  AUTH_SECRET: environment.APP_AUTH_SECRET,
  PORT: Number(environment.PORT) || 5544,
};
