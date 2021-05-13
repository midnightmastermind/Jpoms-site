import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from './ScrollToTop';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
	<ScrollToTop>
	  <App />
	</ScrollToTop>
  </Router>, document.getElementById('root'));

serviceWorker.register();
