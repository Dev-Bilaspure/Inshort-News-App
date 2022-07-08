import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
export const NewsDataContext = createContext();

const NewsDataContextProvider = (props) => {
	const [newsObjectArray, setNewsObjectArray] = useState([]);
	const [isFetching, setIsFetching] = useState(false);
	const [isDrawerVisible, setIsDrawerVisible] = useState(false);
	const handleToggleSelectedLang = () => {
		// selectedLang==='en' ? setSelectedLang('hi') : setSelectedLang('en');
		const obj = {
			selectedLang: languageAndCategoryObject.selectedLang==='en' ? 'hi' : 'en',
			selectedCategory: languageAndCategoryObject.selectedCategory
		}
		handleChangelanguageAndCategoryObject(obj);
	}
	const [languageAndCategoryObject, setLanguageAndCategoryObject] = useState({selectedLang: 'en', selectedCategory: 'allNews'})
	const handleChangelanguageAndCategoryObject = (obj) => {
		setLanguageAndCategoryObject(obj);
	}
	
	const handleSetSelectedCategory = (selectedCat) => {
		console.log(selectedCat);
		const obj = {
			selectedLang: languageAndCategoryObject.selectedLang,
			selectedCategory: selectedCat
		}
		handleChangelanguageAndCategoryObject(obj);
		// setSelectedCategory(selectedCat);
	}
	const handleToogleDrawerVisibility = () => {
		setIsDrawerVisible(!isDrawerVisible);
	}
	const fetchNews = async(lang, cat) => {
		setIsFetching(true);
		try {
			const response = await axios.get(
				cat==='allNews' ? `https://inshort-news-api.herokuapp.com/api/${lang}/news` : `https://inshort-news-api.herokuapp.com/api/${lang}/news/${cat}/`
			).then(res => {
				setNewsObjectArray(res.data.newsArray);
				setIsFetching(false);
				console.log(newsObjectArray);
				setIsDrawerVisible(false);
			}).catch(err => {
				console.log(err);
				setIsFetching(false);
			})
		} catch(error) {
			console.log(error);
			setIsFetching(false);
		}
	}
	useEffect(() => {
		fetchNews(languageAndCategoryObject.selectedLang, languageAndCategoryObject.selectedCategory)
	}, [languageAndCategoryObject])
	
	
  	return (
		<NewsDataContext.Provider value={{newsObjectArray, isFetching, selectedCategory: languageAndCategoryObject.selectedCategory, selectedLang: languageAndCategoryObject.selectedLang, isDrawerVisible, handleToggleSelectedLang, handleSetSelectedCategory, handleToogleDrawerVisibility}}>
			{props.children}
		</NewsDataContext.Provider>
  	);
}
 
export default NewsDataContextProvider;