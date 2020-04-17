'use strict';

const axios = require('axios');
const {
  Errors: {
    MoleculerRetryableError: ClientError,
    MoleculerServerError: ServerError,
  },
} = require('moleculer');

const config = require('../config');

 /**
  * Weather service
  */
module.exports = {
	name: 'weather',
	actions: {
		cities: {
			rest: {
        method: 'GET',
        params: {
          search: 'string',
        },
				path: '/cities'
			},
			async handler(ctx) {
        // check the search request
        const { params: { search = '' } = {} } = ctx;
        if (!search) {
          throw new ClientError(
            config.ERROR_MESSAGES.missingData,
            config.RESPONSE_CODES[400],
          );
        }

        try {
          const { data = [] } = await axios({
            method: 'GET',
            url: `https://www.metaweather.com/api/location/search/?query=${search}`,
          });
          return data;
        } catch (error) {
          throw new ServerError(
            config.ERROR_MESSAGES.internalServerError,
            config.RESPONSE_CODES[500],
          );
        }
			},
		},
	},
};
