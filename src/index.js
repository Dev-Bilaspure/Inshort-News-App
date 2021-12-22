import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import NewsDataContextProvider from './Contexts/NewsDataContext';

ReactDOM.render(
    <NewsDataContextProvider>
        <App/>
    </NewsDataContextProvider>, 
    document.getElementById('root')
);