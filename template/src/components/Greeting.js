import React from 'react'
import PropTypes from 'prop-types'
import cs from 'classnames'
import radius from '@/styles/radius.local.styl'

export default class Greeting extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
  }

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const { value } = this.props
    return (
      <div
        className={cs('pink', radius.br5)}
        style={{ background: '#999' }}
      >
        { value }, xgs!
      </div>
    )
  }
}
