import React, { Component } from 'react';
import { Svg, Path } from 'glamorous';

import BaseIcon from './BaseIcon'

const BaseSvg = props => (
    <Svg width='1em' height="1em" viewBox="0 0 20 20" {...props}>
        <Path fillRule="evenodd" d="M10 10 C30 40 50 40 60 10"/>
    </Svg>
);

export default props => (
    <BaseIcon {...props} SvgIcon={BaseSvg}/>
);