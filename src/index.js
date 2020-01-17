import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import * as serviceWorker from './serviceWorker';
import configureStore from "./utils/store";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
    <Router>
        <Provider store={configureStore()}>
            <App/>
        </Provider>
    </Router>, document.getElementById('root'));

serviceWorker.unregister();
