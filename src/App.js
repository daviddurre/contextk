import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MaterialUi from './views/MaterialUi';

import MyProvider from './components/Context';

const App = () => (
  <MyProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={MaterialUi} exact />
      </Switch>
    </BrowserRouter>
  </MyProvider>
);

export default App;
