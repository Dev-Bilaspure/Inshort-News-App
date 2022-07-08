import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import NewsDataContextProvider, { NewsDataContext } from './Contexts/NewsDataContext';
import Header from './components/Header';
import { Box, Slider } from '@material-ui/core';
import InfoHeader from './components/InfoHeader';
import { makeStyles } from '@material-ui/styles';
import Articles from './components/Articles';

const useStyles = makeStyles({
    container: {
        marginTop: 110,
        width: '67.5%',
        margin: '0 auto',
    }
})

const App = () => {
    // const { newsArticles, setParamObj } = useContext(NewsDataContext);
    // let obj = {
    //     query: 'Narendra Modi',
    //     categories: ['politics', 'top'],
    //     languages: ['en', 'hi'],
    //     countries: ['in', 'us']
    // }
    // setParamObj(obj);
    
    const classes = useStyles();
    return (
        <div>
            <NewsDataContextProvider>
                
                <Header />
                <Box className={classes.container}>
                    <InfoHeader />
                </Box>
                <Articles />
            </NewsDataContextProvider>
            
        </div>
    )
}

export default App
