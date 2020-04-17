/**
 * Format the successful response
 * @param {*} data - data for the response
 * @returns {object}
 */
module.exports = (data = null) => {
  const response = {
    datetime: Date.now(),
    info: 'OK',
    status: 200,
  };
  if (data) {
    response.data = data;
  }
  return response;
};
