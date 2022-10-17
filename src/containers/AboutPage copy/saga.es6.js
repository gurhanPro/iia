import { take, call, put } from 'redux-saga/effects';
import * as types from '../../lib/actionTypes.es6';
import {
    getGroupProducts, createGroupClaimCallBack
} from '../../lib/requests.es6';
import * as actions from './actions.es6';
import { unAuthorizedNotification } from '../../lib/access.es6';
import { GAloggerException } from '../../lib/monitoring.es6';


export function* getGroupProductsRequestWatcher() {
  while (yield take(types.GET_GROUP_PRODUCTS_REQUEST)) {
    try {
      const response = yield call(getGroupProducts);
      yield put(actions.getGroupProductsSuccess(response.data));
    } catch (e) {
      yield put(
        actions.getGroupProductsFailed(
          'An error occurred, this could be due to invalid data '
        )
      );
      GAloggerException(e);
      unAuthorizedNotification(e);
    }
  }
}

export function* createGroupClaimCallBackRequestWatcher() {
  while (true) {
    try {
      const { payload } = yield take(types.CREATE_GROUP_CLAIM_CALLBACK_REQUEST);
      const response = yield call(createGroupClaimCallBack, payload);
      yield put(actions.createGroupClaimCallBackSuccess(response.data));
    } catch (e) {
      yield put(
        actions.createGroupClaimCallBackFailed(
          e.response.data
        )
      );
      GAloggerException(e);
      unAuthorizedNotification(e);
    }
  }
}