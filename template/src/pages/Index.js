import * as React from 'react'
import Header from 'components/Header'

export default class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
    }
  }

  render () {
    return (
      <div>
        <Header name="Header1" />
        {this.state.name}
      </div>
    )
  }
}
