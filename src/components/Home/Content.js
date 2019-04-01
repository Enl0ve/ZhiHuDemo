import React, { Component } from 'react'
import ContentHOC from '../../components/Home/ConentHOC'
import ContentLeftTabs from '../../components/Home/ContentLeft'

export default class Content extends Component {
  render() {
    return (
      <div>
        <ContentLeftTabs></ContentLeftTabs>
      </div>
    )
  }
}
