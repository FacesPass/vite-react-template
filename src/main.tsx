import React from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import ReactDOM from 'react-dom';
import './style/index.module.less';
import './style/reset.module.less';
import App from './App';

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>,
  document.getElementById('root'),
);
