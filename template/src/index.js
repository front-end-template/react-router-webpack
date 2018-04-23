import React from 'react'
import ReactDOM from 'react-dom'
import Route from './routes/'
import './styles/main.scss'

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(
  <Route />,
  document.getElementById('app'),
)
