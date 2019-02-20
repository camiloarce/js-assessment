asyncAnswers = {
  /**
   * Asynchronously returns a value via a promise. Example:
   * async('anyValue').then((result) => { return result === 'anyValue';});
   *
   * @param value - Any value
   * @returns {then: function} A promise like object containing a then property.
   */
  // async: async value => value,
  async: value => Promise.resolve(value),

  /**
   * Creates a promise that resolves with the data returned from an ajax call to the url url.
   * You may use jquery, XMLHttpRequest, or fetch.
   * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
   * https://api.jquery.com/jQuery.ajax/
   * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API   *
   *
   * @param {String} url - a valid url
   * @returns {then: function} A promise like object containing a then property.
   */
  manipulateRemoteData: url =>
    new Promise((resolve, reject) => {
      window
        .fetch(url)
        .then(response => response.json())
        .then((data) => {
          const result = data.people.map(item => item.name).sort((a, b) => a.localeCompare(b));
          return resolve(result);
        })
        .catch(error => reject(new Error(error.message)));
    }),
};
