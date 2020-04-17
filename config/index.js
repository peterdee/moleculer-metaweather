const { env: environment = {} } = process;

module.exports = {
  AUTH_SECRET: environment.APP_AUTH_SECRET,
  ERROR_MESSAGES: {
    internalServerError: 'INTERNAL_SERVER_ERROR',
    invalidAuth: 'INVALID_AUTH',
    missingAuth: 'MISSING_AUTH',
    missingData: 'MISSING_DATA',
  },
  ERROR_TYPES: {
    accessDenied: 'ACCESS_DENIED',
  },
  RESPONSE_CODES: {
    200: 200,
    400: 400,
    401: 401,
    403: 403,
    404: 404,
    500: 500,
  },
  PORT: Number(environment.PORT) || 5544,
};
