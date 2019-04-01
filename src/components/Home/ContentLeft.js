import React, { Component } from 'react'
const Tabs = require('../../Config.json').Tabs;

export default class ContentLeftTabs extends Component {
  render() {
    return (      
      <div>
        <ul className="Content-Tabs">
            {
                Tabs.map( (el, index) => {
                return  <li key={`Tabs-${index}`}><a>{el.name.CN}</a></li>
                } )
            }
        </ul>
      </div>
    )
  }
}
