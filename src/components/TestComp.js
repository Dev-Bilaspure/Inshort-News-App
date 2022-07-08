import React, { useContext, useState } from 'react'
import { NewsDataContext } from '../Contexts/NewsDataContext';

const TestComp = () => {
    let obj = {
        query: 'Narendra Modi',
        categories: ['politics', 'top'],
        languages: ['en', 'hi'],
        countries: ['in', 'us']
    }
    const { newsArticles, changeParamObj } = useContext(NewsDataContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newsArticles.length);
        // changeParamObj(obj);
    }
    return (
        <div>
            <h2>Hi from test comp</h2>
            <form onSubmit={handleSubmit}>
                <input type="submit" value='submit'/>
            </form>
            <hr />
            {
                newsArticles ? newsArticles.map((article) => {
                    if(article) {
                        console.log(article);
                        console.log('hello');
                    }
                        
                }) : 'Loading'
            }
        </div>
    )
}

export default TestComp
