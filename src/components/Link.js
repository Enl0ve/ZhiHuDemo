import React, { Component } from 'react'

const STATUS = {
    NORMAL:'normal',
    HORVERED:'horver'
}
export default class Link extends Component {
    constructor(props){
        super(props);
        this._onMouseEnter = this._onMouseEnter.bind(this);
        this._onMouseLeave = this._onMouseLeave.bind(this);
        this.state = {
            status: STATUS.NORMAL,
        }
    }

    _onMouseEnter() {
        this.setState({
            status:STATUS.HORVERED
        });
    }

    _onMouseLeave() {
        this.setState({
            status:STATUS.NORMAL
        });
    }

  render() {
    return (
      <a className={this.state.status}
        href={this.props.href || "#"}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}>
            {this.props.children}
      </a>
    )
  }
}
