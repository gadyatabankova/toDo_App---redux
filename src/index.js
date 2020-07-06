import React from 'react';
import ReactDOM from 'react-dom';

import TodoApp from './containers/app';
import { createStore } from 'redux';
import todos from './reducers';

const initialState = [
  {id: 1, name: 'Настроить webpack', checked: true},
  {id: 2, name: 'Запустить webpack-dev-server', checked: true},
  {id: 3, name: 'Написать TOdoApp', checked: false}
];

const store = createStore(todos, initialState);

ReactDOM.render(
  <TodoApp store={store} />,
  document.querySelector('#app')
);
