import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import axios from '../../../services/axios';
import history from '../../../services/history';
import * as actions from './actions';
import * as types from '../types';

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/tokens', payload);
    yield put(actions.LoginSuccess({ ...response.data }));
    toast.success('Login realizado com sucesso.');

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    history.push(payload.prevPath);
  } catch (err) {
    toast.error('Usuário ou senha inválidos.');
    yield put(actions.LoginFailure());
  }
}

function registerRequest({ payload }) {
  console.log(payload);
}
function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
