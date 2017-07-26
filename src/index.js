import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import App from './components/app';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};


render(<App />, document.getElementById('root'));
