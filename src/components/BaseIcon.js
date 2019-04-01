import React, { Component } from 'react';
import Proptypes from 'prop-types';
import glamorous from 'glamorous';
import { presets } from 'glamor';

class BaseIcon extends Component {
    //这种写法需要安装 npm install --save-dev babel-preset-stage-0
    //webpack.config.js中需要配置为
    // rules:{
    //     test:/\.js$/,
    //     use:{
    //         loader:'babel-core',
    //         presets:['react', 'env', 'stage-0']
    //     }
    // }
    // static propTypes = {
    //     SvgIcon: Proptypes.func.isRequired,
    //     color: Proptypes.string,
    //     circleColor: Proptypes.string,
    //     fontSize: Proptypes.string,
    // };

    // static defaultProps = {
    //     color:'', //字体颜色
    //     circleColor: '#76829E', //多层path时背景颜色
    // };

    render() {
        const {color, SvgIcon, circleColor, fontSize } = this.props;
        if(color === '' && circleColor === ''){
            return (<SvgIcon {...this.props}/>);
        }

        const WrappedSvgIcon = glamorous(SvgIcon)({
            '>path':{
                fill:color,
                width:fontSize,//设置fontSize来改变svg的大小
                height: fontSize,//设置fontsize来改变svg的大小
            },
            '>circle': {
                fill: circleColor, //这是带背圆背景的icon圆的颜色
            },
        });

        return (
            <WrappedSvgIcon {...this.props}/>
        );
    }
}

//这种写法不要安装babel-preset-stage-0
BaseIcon.propTypes = {
    SvgIcon: Proptypes.func.isRequired,
    color: Proptypes.string,
    circleColor: Proptypes.string,
    fontSize: Proptypes.string,
}

BaseIcon.defaultProps = {
    color:'', //字体颜色
    circleColor: '#76829E', //多层path时背景颜色
}

export default BaseIcon;
