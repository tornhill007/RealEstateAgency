import React from 'react';
import { Provider } from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import MainContainer from './containers/MainContainer'
import configureStore from './utils/store';

function App() {
  return (
      <Provider store={configureStore()}>
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <MainContainer/>
                    </Route>
                    <Route path="/about">
                        <MainContainer/>
                    </Route>
                    <Route path="/dashboard">
                        <MainContainer/>
                    </Route>
                </Switch>
            </div>
        </Router>
      </Provider>
  );
}

export default App;
