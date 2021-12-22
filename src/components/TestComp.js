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
        changeParamObj(obj);
    }
    return (
        <div>
            <h2>Hi from test comp</h2>
            <form onSubmit={handleSubmit}>
                <input type="submit" value='submit'/>
            </form>
            <hr />
            {newsArticles.map(article => {
                return(
                    <div key={article.link}>
                        <h3>{article.title}</h3>
                    </div>
                );
            })}
        </div>
    )
}

export default TestComp
