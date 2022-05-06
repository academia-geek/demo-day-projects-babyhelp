import React from 'react';
import ReactDOM from 'react-dom';
import AppRouters from './routers/AppRouters';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/styles/lading.css";
import { MuiPickersUtilsProvider } from "@material-ui/pickers"
import DateFnsUtils from '@date-io/date-fns'
import esLocale from 'date-fns/locale/es'


ReactDOM.render(
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale= {esLocale}>
      <AppRouters />
    </MuiPickersUtilsProvider>
  </Provider>,
  document.getElementById('root')
);


