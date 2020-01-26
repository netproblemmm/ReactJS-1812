import React from 'react'
import ReactDOM from 'react-dom'
import {ConnectedRouter} from 'connected-react-router'
import Router from './components/Router.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {PersistGate} from 'redux-persist/integration/react'

// redux
import initStore, {history} from './store.js'
import {Provider} from 'react-redux'

let {store, persistor} = initStore()

ReactDOM.render (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ConnectedRouter history={history}>
                <MuiThemeProvider>
                    <Router />
                </MuiThemeProvider>
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
)