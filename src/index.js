import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
<<<<<<< HEAD
import cyan from '@material-ui/core/colors/cyan';
import { BrowserRouter } from 'react-router-dom'
=======
>>>>>>> 44f25e171f54ed39a6ca565ba7b1b64b2fe39f65

const theme = createMuiTheme({
    palette: {
        primary: {main:'#ff6d00'},
      },
    });

ReactDOM.render(<BrowserRouter><MuiThemeProvider theme={theme} ><App /></MuiThemeProvider></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
