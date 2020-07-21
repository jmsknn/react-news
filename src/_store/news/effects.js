import { put, takeLatest, all } from "redux-saga/effects";
import { getNews } from "../../_apis/news";

function* fetchNews(action) {
  const { params } = action;
  console.log("///////////");
  const json = yield getNews(params).then((response) => response.json());
  console.log("json", json);
  yield put({ type: "NEWS_RECEIVED", json: json });
}

function* actionWatcher() {
  yield takeLatest("GET_NEWS", fetchNews);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
