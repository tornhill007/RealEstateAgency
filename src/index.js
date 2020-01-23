import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import * as serviceWorker from './serviceWorker';
import configureStore from "./utils/store";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import AppContainer from "./AppContainer";

ReactDOM.render(
    <Router>
        <Provider store={configureStore()}>
            <AppContainer/>
        </Provider>
    </Router>, document.getElementById('root'));

serviceWorker.unregister();
