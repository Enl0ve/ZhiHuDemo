import React, { Component } from 'react'

//将Content作为高阶组件
const Content = (WrappedComponent) => {
    return class Conent extends Component {
        render() {
            return (
                <main role="main" className="App-main">
                <div className="Topstory">
                    <div className="Topstory-container">
                        <div className="Topstory-mainColumn">
                           <WrappedComponent></WrappedComponent>
                        </div>
                    </div>
                </div>
                </main>
            )
        }
    }
}