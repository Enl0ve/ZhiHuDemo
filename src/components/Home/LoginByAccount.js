import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router'

export default class LoginByAccount extends Component {
  static propTypes = {
    userName: PropTypes.string,
    password: PropTypes.string,
  }

  constructor(props){
      super(props);
      this.onUsernameChange = this.onUsernameChange.bind(this);
      this.onPasswordChange = this.onPasswordChange.bind(this);
      this.state = {
          userName: '',
          password: '',
      }
  }

  onPasswordChange = function(event) {
    this.setState({
        password: event.target.value,
    });
  }

  onUsernameChange = function(event) {
      this.setState({
          userName: event.target.value,
      });
  }

  submit = function(userName, password) {
      const submitVlaue = {
          userName: userName,
          password: password,
      };

      let history = this.props.history;
      const url = "http://localhost:8080/login";
      try{
        fetch(url, {
            method: "POST",
            headers: {
                "Content-type":"application/json;charset=utf-8",
            },
            body: JSON.stringify(submitVlaue),
        }).then( res => res.json())
          .then( data => {
              if(data.success){
                  alert("welcome back, master");
                  history.push('/content');
              }else{
                  alert("please type correct userName && password!");
              }
          });
      }catch(e){
        console.error(e);
      } 
  }

  render() {
    const {userName, password} = this.state;
    return (
      <div>
        <div>
            <input type="text" placeholder="手机号或邮箱" onChange={this.onUsernameChange}></input>
        </div>
        <div>
            <input type="text" placeholder="密码" onChange={this.onPasswordChange}></input>
        </div>
        <div>
            <button onClick={this.submit.bind(this, userName, password)}>登录</button>
        </div>
      </div>
    )
  }
}
