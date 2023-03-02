import { put, takeLatest } from "redux-saga/effects";

import {
  loginStart,
  loginSuccess,
  loginFailure,
  getSessionInfoStart,
  getSessionInfoSuccess,
  getSessionInfoFailure,
} from "../Redux/account";
import { getUserSessionData, getLogin } from "../../Services/User";
import { daysRemaining } from "../../Services/Utils/helper";
import config from "../../Config/config";
import moment from "moment";

function* accountWatcher() {
  yield takeLatest(loginStart.type, loginWorker);
  yield takeLatest(getSessionInfoStart.type, sessionWorker);
}

function* loginWorker(action) {
  try {
    const { data: { data, status, message } = {} } = yield getLogin(
      action.payload
    );
    if (status === 200) {
      yield put(loginSuccess(data));
    } else {
      yield put(loginFailure(message));
    }
  } catch (e) {
    yield put(loginFailure(e));
  }
}

function* sessionWorker(action) {
  try {
    const { data: { data, status } = {} } = yield getUserSessionData(
      action.payload
    );
    // console.log("sessionWorker", status, data);
    const resp = { ...data };
    // check user's trail period or purchase plan expired
    const {
      currentUser: {
        created_at: createdAt,
        subscription,
      } = {},
    } = data;
    // console.log("createdAt", createdAt)
    if (subscription) {
      const { current_period_end } = subscription;
      const td = daysRemaining(current_period_end);
      resp.currentUser = {
        ...resp.currentUser,
        trailPeriod: null,
        renewalDate: td > 0 ? moment(current_period_end).format(config.dateFormat) : null,
      };
    } else {
      const td = daysRemaining(createdAt, true);
      resp.currentUser = { ...resp.currentUser, trailPeriod: td };
    }

    if (status === 200) {
      yield put(getSessionInfoSuccess({ ...resp }));
    } else {
      yield put(getSessionInfoFailure());
    }
  } catch (e) {
    yield put(getSessionInfoFailure(e));
  }
}

export default accountWatcher;
