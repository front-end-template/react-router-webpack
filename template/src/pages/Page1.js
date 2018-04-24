import * as React from 'react'
import PropTypes from 'prop-types'
import Header from 'components/Header'

export default class Page1 extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  constructor (props) {
    super(props)
    this.state = {
      age: 1,
    }
  }

  render () {
    return (
      <div>
        <Header title={this.props.title} />
        {this.state.age}
      </div>
    )
  }
}
