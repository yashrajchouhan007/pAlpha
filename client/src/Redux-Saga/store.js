import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import LoggerMiddleware from 'redux-logger';
import { appEnv } from '../Config/config';
import reducer from '../Redux-Saga/Redux';
import saga from '../Redux-Saga/Saga';



const sagaMiddleWare = createSagaMiddleware();
const middleWare = [...getDefaultMiddleware({ thunk: true, serializableCheck: false }), sagaMiddleWare];

if (appEnv === 'development') {
    middleWare.push(LoggerMiddleware);
}
else {
    /* eslint-disable */
    console.log = () => { }
    console.info = () => { }
    /* eslint-enable */
}

const store = configureStore({
    reducer,
    middleware: middleWare
})


sagaMiddleWare.run(saga);

export default store;
