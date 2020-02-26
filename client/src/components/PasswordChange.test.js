import React from 'react';
import ReactDOM from 'react-dom';
import PasswordChange from './PasswordChange';

it('PasswordChange renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PasswordChange />, div);
  ReactDOM.unmountComponentAtNode(div);
});