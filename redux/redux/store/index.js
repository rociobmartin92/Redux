/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import amountReducer from '../reducer';

const reducers = combineReducers({
  amountReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
