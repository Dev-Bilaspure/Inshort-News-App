import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import NewsDataContextProvider, { NewsDataContext } from './Contexts/NewsDataContext';
import TestComp from './components/TestComp';

const App = () => {
    // const { newsArticles, setParamObj } = useContext(NewsDataContext);
    // let obj = {
    //     query: 'Narendra Modi',
    //     categories: ['politics', 'top'],
    //     languages: ['en', 'hi'],
    //     countries: ['in', 'us']
    // }
    // setParamObj(obj);
    return (
        <div>
            <NewsDataContextProvider>
                <h1>Hello Dev!!</h1>
                <TestComp />
            </NewsDataContextProvider>
            
        </div>
    )
}

export default App
