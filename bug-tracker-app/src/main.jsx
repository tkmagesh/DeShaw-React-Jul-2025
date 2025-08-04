import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Bugs from './bugs'
import store from './store';
import { Provider } from 'react-redux';

const root = createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <Bugs/>
  </Provider>
)


