import { put, takeLatest } from 'redux-saga/effects';
import { fetchNewList, getNewsList } from './index';
import axios from 'axios';
import config from 'react-global-configuration';

const apiUrl = config.get('apiBaseUrl');
const json    = '.json?print=pretty';


 describe('SAGAS', () => {
   it('should dispatch action "GET_NEWS_LIST" ', () => {
     const generator = getNewsList();
     expect(generator.next().value)
       .toEqual(takeLatest('GET_NEWS_LIST', fetchNewList));
     expect(generator.next().done).toBeTruthy();
   })
})