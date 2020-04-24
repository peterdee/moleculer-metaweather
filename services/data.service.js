'use strict';

const axios = require('axios');

const clientError = require('../utilities/client-error');
const config = require('../config');
const formatResponse = require('../utilities/format-response');
const serverError = require('../utilities/server-error');

 /**
  * Data service
  */
module.exports = {
  name: 'data',
	actions: {
		search: {
			rest: {
        method: 'GET',
        params: {
          query: 'string',
        },
				path: '/search'
			},
			async handler(ctx) {
        // check the search query
        const { params: { query = '' } = {} } = ctx;
        if (!query) {
          throw clientError(
            config.ERROR_MESSAGES.missingData,
            config.RESPONSE_CODES[400],
          );
        }

        try {
          const { data = [] } = await axios({
            method: 'GET',
            url: `https://www.metaweather.com/api/location/search/?query=${query}`,
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
    location: {
			rest: {
        method: 'GET',
        params: {
          id: 'string',
        },
				path: '/location'
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
        if (Number.isNaN(Number(id))) {
          throw clientError(
            config.ERROR_MESSAGES.invalidLocationId,
            config.RESPONSE_CODES[400],
          );
        }

        try {
          const { data } = await axios({
            method: 'GET',
            url: `https://www.metaweather.com/api/location/${id}`,
          });
          data.svgLink = 'https://www.metaweather.com/static/img/weather/';
          return formatResponse(data);
        } catch (error) {
          const { response: { data: { detail = '' } = {} } = {} } = error;
          if (detail && detail === 'Not found.') {
            throw clientError(
              config.ERROR_MESSAGES.invalidLocationId,
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
