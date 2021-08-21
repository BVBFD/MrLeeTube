import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
// import Youtube from './service/youtube';
import Youtube from './service/youtube_axios';

const youtube = new Youtube(process.env.REACT_APP_API_KEY);
ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube}/>
  </React.StrictMode>,
  document.getElementById('root')
);
