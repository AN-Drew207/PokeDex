import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.css'
import './components/style/App.scss'

const Container = document.querySelector('#root')

ReactDOM.render(<App/>, Container);

