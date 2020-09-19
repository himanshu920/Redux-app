import {all, call, put, takeLatest, } from 'redux-saga/effects';
import axios from 'axios';
import config from 'react-global-configuration';

const apiUrl = config.get('apiBaseUrl');
const json    = '.json?print=pretty';

function* fetchNewList() {
    try {
      const response = yield call(axios.get, `${apiUrl}topstories${json}`);
      const data = yield all(response.data.slice(0,90).map((itemId, i) => call(axios.get, `${apiUrl}item/${itemId+json}`)));      
      yield put({type: 'GET_NEWS_LIST',newsData: data})
    } catch (error) {
      console.log(error)    
    }
}

export function* getNewsList() {
    yield takeLatest('GET_NEWS_LIST', fetchNewList);
}

export default function* rootSaga() {
  
    yield all([getNewsList()]);
}