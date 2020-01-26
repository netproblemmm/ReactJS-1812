import initReducers from '../reducers'
import { createStore,applyMiddleware,compose  } from 'redux';
import middlewares from '../middlewares'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

export const history = createBrowserHistory()

const persistConfig = {
    key:"geekmessanger",
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist:["chatReducer"],
}

export default function initStore () {
    
    const store = createStore(
        persistReducer(persistConfig,initReducers(history)),
        compose(
            applyMiddleware(routerMiddleware(history), ...middlewares)
        )
        
        )
    const persistor = persistStore(store)
    return {store,persistor}        
}