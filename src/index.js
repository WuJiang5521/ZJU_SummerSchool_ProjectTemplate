// 这是React的入口

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {StateProvider} from "./store";

/*
ReactDOM.render(element, container), 这个函数是在container里渲染element。
大家可以看到，public/index.html文件中，body标签里只有一个id为root的div标签。这里选取它作为container。
然后在这个标签里，我们渲染element，即StateProvider和其子内容App。
StateProvider提供了全局的数据，维护数据处理的逻辑；而App是界面UI内容，使用数据绘制内容。
 */
ReactDOM.render(
  <StateProvider>
      <App/>
  </StateProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
