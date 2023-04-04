import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import videoSlice from './video/slice';

const videoPersistConfig = {
  key: 'video',
  whitelist: [''],
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  video: persistReducer(videoPersistConfig, videoSlice),
});

export default rootReducer;
