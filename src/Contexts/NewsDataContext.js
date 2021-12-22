import React, { createContext, useEffect, useState } from 'react';
import fetchNews from '../api/NewsAPI';

export const NewsDataContext = createContext();

const NewsDataContextProvider = (props) => {

	const [newsArticles, setNewsArticles] = useState([]);
	const [paramObj, setParamObj] = useState({
		query: '', 
		categories: [], 
		languages: [], 
		countries: []
	})

	const changeParamObj = (obj) => {
		console.log('hello');
		setParamObj(obj);
	}

	const updateNewsArticles = (articleArray) => {
		setNewsArticles(articleArray);
	}

	useEffect(() => {
		fetchNews(paramObj, updateNewsArticles);
	}, [paramObj]);

  	return (
		<NewsDataContext.Provider value={{ newsArticles, changeParamObj }}>
			{props.children}
		</NewsDataContext.Provider>
  	);
}
 
export default NewsDataContextProvider;