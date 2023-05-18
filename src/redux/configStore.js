import {applyMiddleware, combineReducers, createStore} from 'redux';

import reduxThunk from 'redux-thunk'

import {HistoryReducer} from './reducers/HistoryReducer';
import {UserLoginAdminReducer} from './reducers/UserReducer';
import {SanPhamReducer} from './reducers/SanPhamReducer';
import {DonHangReducer} from './reducers/DonHangReducer';
import {ModalReducer} from './reducers/ModalReducer';

//middleware saga
import createMiddleWareSaga from 'redux-saga';
import { rootSaga } from './sagas/rootSaga';

const middleWareSaga = createMiddleWareSaga();
const rootReducer = combineReducers({
    //reducer khai báo tại đây
    // LoadingReducer,
    // ModalReducer
    HistoryReducer,
    UserLoginAdminReducer,
    SanPhamReducer,
    ModalReducer,
    DonHangReducer
    
})

const store = createStore(rootReducer,applyMiddleware(reduxThunk,middleWareSaga));

//Gọi saga
middleWareSaga.run(rootSaga);


export default store;

