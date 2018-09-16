import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const url = window.location.href.replace(/^(?:\/\/|[^/]+)*\//, '');
const id = url.substring(0, url.indexOf('/'));

ReactDOM.render(<App id={id} />, document.getElementById('ratingsAndReviews'));
