'use strict';

const APIGateway = require('moleculer-web');
const jwt = require('jsonwebtoken');

const { AUTH_SECRET = '', PORT = 5544 } = require('../config');

module.exports = {
	name: 'api',
	mixins: [APIGateway],

	// More info about settings: https://moleculer.services/docs/0.14/moleculer-web.html
	settings: {
		port: PORT,
		ip: '0.0.0.0',

		// Global Express middlewares. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Middlewares
		use: [],

		routes: [
			{
				path: '/api',
				whitelist: [
					"**"
				],

				// Route-level Express middlewares. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Middlewares
				use: [],

				// Enable/disable parameter merging method. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Disable-merging
				mergeParams: true,
				authentication: false,
				authorization: false,

				// The auto-alias feature allows you to declare your route alias directly in your services.
				// The gateway will dynamically build the full routes from service schema.
				autoAliases: true,

				aliases: {

				},

				/** 
				 * Before call hook. You can check the request.
				 * @param {Context} ctx 
				 * @param {Object} route 
				 * @param {IncomingRequest} req 
				 * @param {ServerResponse} res 
				 * @param {Object} data
				 * 
				onBeforeCall(ctx, route, req, res) {
					// Set request headers to context meta
					ctx.meta.userAgent = req.headers["user-agent"];
				}, */

				/**
				 * After call hook. You can modify the data.
				 * @param {Context} ctx 
				 * @param {Object} route 
				 * @param {IncomingRequest} req 
				 * @param {ServerResponse} res 
				 * @param {Object} data
				onAfterCall(ctx, route, req, res, data) {
					// Async function which return with Promise
					return doSomething(ctx, res, data);
				}, */

				// Calling options. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Calling-options
				callingOptions: {},

				bodyParsers: {
					json: {
						strict: false,
						limit: "1MB"
					},
					urlencoded: {
						extended: true,
						limit: "1MB"
					}
				},

				// Mapping policy setting. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Mapping-policy
				mappingPolicy: "all", // Available values: "all", "restrict"

				// Enable/disable logging
				logging: true
			}
		],

		// Do not log client side errors (does not log an error response when the error.code is 400<=X<500)
		log4XXResponses: false,
		// Logging the request parameters. Set to any log level to enable it. E.g. "info"
		logRequestParams: null,
		// Logging the response data. Set to any log level to enable it. E.g. "info"
		logResponseData: null,
	},

  methods: {
    /**
     * Authenticate the request
     * @param {object} ctx - context object
     * @param {Object} route - route object
     * @param {object} request - request object
     * @returns {Promise<void>}
     */
    async authenticate(ctx, route, request) {
      try {
        // check if token was provided
        const { headers: { 'x-auth': token = '' } = {} } = request;
        if (!token) {
          throw new E.UnAuthorizedError(E.ERR_NO_TOKEN);
        }

        // decode the token
        const decoded = await jwt.verify(auth, AUTH_SECRET);
        const { provider = '' } = decoded || {};
        if (!provider) {
          throw new APIGateway.Errors.UnAuthorizedError(APIGateway.Errors.ERR_INVALID_TOKEN);
        }

        return {
          authenticated: true,
          provider,
        };
      } catch (error) {
        throw new APIGateway.Errors.UnAuthorizedError(APIGateway.Errors.ERR_INVALID_TOKEN);
      }
		},
	},
};
