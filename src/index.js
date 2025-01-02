import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './redux/react-redux'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'


let rerenderEntireTree = (state) => {
  root.render(
    <Provider store={store}>
        <App />
    </Provider>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});

reportWebVitals();