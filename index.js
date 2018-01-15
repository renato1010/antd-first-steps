import React from 'react';
import ReactDOM from 'react-dom';
import Buttons from './src/components/Button/Button';
//import {Button} from 'antd';

ReactDOM.render(
  <div style={{ margin: '30px' }} >
    <Buttons />
  </div>,
  document.getElementById('mountNode')
);
