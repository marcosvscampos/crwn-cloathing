import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { userReducer } from './user/User.reducer';
import cartReducer from './cart/Cart.reducer';
import storage  from 'redux-persist/lib/storage';


const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

export default persistReducer(persistConfig, rootReducer);