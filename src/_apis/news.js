const API_URL = "http://newsapi.org/v2/top-headlines";
const API_KEY = "73e02ed1c008418aa705cb1cb9cec9d9";

export function getNews(params) {
  console.log("params", params);
  const _params = {
    ...params,
    apiKey: API_KEY,
  };
  const _paramsArray = [];
  for (const key in _params) {
    _paramsArray.push(`${key}=${_params[key]}`);
  }
  const _queryString = _paramsArray.join("&");
  return fetch(`${API_URL}?${_queryString}`);
}
