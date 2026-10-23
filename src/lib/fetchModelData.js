
/**
 * Fetch a model from the web server.
 *
 * @param {string} url The URL to issue the GET request.
 */
function fetchModel(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP error: " + response.status);
      }
      return response.json();
    });
}

export default fetchModel;