import React from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import ReactDOM from 'react-dom';
import './style/index.module.less';
import './style/reset.module.less';
import Routers from '@/router';

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Routers />
  </ConfigProvider>,
  document.getElementById('root'),
);
