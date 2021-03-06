import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Layout from '../src/components/Layout/index'
import Login from './routes/Login/index'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/login"  component={Login} />

        </Switch>
      </Layout>
    </Router>
  );
}

export default RouterConfig;
