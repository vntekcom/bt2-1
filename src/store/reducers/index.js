import { combineReducers }  from 'redux';
import orderReducer from './order'
import listReducer from './list';

//Tong hop tat ca reducer
const rootReducer = combineReducers ({
    //nơi chưa toàn bộ dữ liệu state
    listArr: listReducer,
    orderArr: orderReducer,
})

export default rootReducer;