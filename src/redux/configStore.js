import {applyMiddleware, combineReducers, createStore} from 'redux';

import reduxThunk from 'redux-thunk'

import {HistoryReducer} from './reducers/HistoryReducer';
import {UserLoginAdminReducer} from './reducers/UserReducer';
import {SanPhamReducer} from './reducers/SanPhamReducer';
import {DonHangReducer} from './reducers/DonHangReducer';
import {DonHangNNReducer} from './reducers/DonHangNNReducer';
import {ShopReducer} from './reducers/ShopReducer';
import {LoaiSanPhamReducer} from './reducers/LoaiSanPhamReducer';
import {KhuyenMaiReducer} from './reducers/KhuyenMaiReducer';
import {NguoiDungReducer} from './reducers/NguoiDungReducer';
import {TaiKhoanReducer} from './reducers/TaiKhoanReducer';
import {NongDanReducer} from './reducers/NongDanReducer';
import {ModalReducer} from './reducers/ModalReducer';

//middleware saga
import createMiddleWareSaga from 'redux-saga';
import { rootSaga } from './sagas/rootSaga';

const middleWareSaga = createMiddleWareSaga();
const rootReducer = combineReducers({
    //reducer khai báo tại đây
    // LoadingReducer,
    HistoryReducer,
    UserLoginAdminReducer,
    SanPhamReducer,
    ModalReducer,
    DonHangReducer,
    ShopReducer,
    LoaiSanPhamReducer,
    KhuyenMaiReducer,
    DonHangNNReducer,
    NguoiDungReducer,
    TaiKhoanReducer,
    NongDanReducer
    
})

const store = createStore(rootReducer,applyMiddleware(reduxThunk,middleWareSaga));

//Gọi saga
middleWareSaga.run(rootSaga);


export default store;

