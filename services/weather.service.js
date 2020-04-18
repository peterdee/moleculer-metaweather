'use strict';

const axios = require('axios');

const clientError = require('../utilities/client-error');
const formatResponse = require('../utilities/format-response');
const config = require('../config');
const serverError = require('../utilities/server-error');

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
          throw clientError(
            config.ERROR_MESSAGES.missingData,
            config.RESPONSE_CODES[400],
          );
        }

        try {
          const { data = [] } = await axios({
            method: 'GET',
            url: `https://www.metaweather.com/api/location/search/?query=${search}`,
          });
          return formatResponse(data);
        } catch (error) {
          throw serverError(
            config.ERROR_MESSAGES.internalServerError,
            config.RESPONSE_CODES[500],
          );
        }
			},
    },
    city: {
			rest: {
        method: 'GET',
        params: {
          search: 'string',
        },
				path: '/city'
			},
			async handler(ctx) {
        // check the city identifier
        const { params: { id = '' } = {} } = ctx;
        if (!id) {
          throw clientError(
            config.ERROR_MESSAGES.missingData,
            config.RESPONSE_CODES[400],
          );
        }

        try {
          const { data } = await axios({
            method: 'GET',
            url: `https://www.metaweather.com/api/location/${id}`,
          });
          return formatResponse(data);
        } catch (error) {
          const { response: { data: { detail = '' } = {} } = {} } = error;
          if (detail && detail === 'Not found.') {
            throw clientError(
              config.ERROR_MESSAGES.invalidCityId,
              config.RESPONSE_CODES[400],
            );
          }
          throw serverError(
            config.ERROR_MESSAGES.internalServerError,
            config.RESPONSE_CODES[500],
          );
        }
			},
		},
	},
};
