import * as React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import App from '@/App'
import Page404 from 'pages/404'
import Page1 from 'pages/Page1'

const routes = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/" exact component={App} />
        <Route
          path="/page1"
          render={props => (
            <Page1 {...props} {...{ a: 1, b: 2 }} title="Page1" />
          )}
        />
        <Route component={Page404} />
      </Switch>
    </div>
  </Router>
)

export default routes
