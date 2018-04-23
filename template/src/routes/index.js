import * as React from 'react'
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
} from 'react-router-dom'

import App from '@/App'
import Page404 from 'pages/404'

const routes = () => (
  <Router>
    <div>
      <Route path="/" exact component={App} />
      <Route component={Page404} />
    </div>
  </Router>
)

export default routes
