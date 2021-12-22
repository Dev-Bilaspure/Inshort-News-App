import axios from "axios";

export const fetchNewsByParams = async(paramObj, updateNewsArticles) => {
    console.log('waiting');
    try {
        const news = await axios.post(
            'http://localhost:5000/api/newsAPI', 
            paramObj
        )
        updateNewsArticles(news.data.results);
        
    } catch (error) {
        console.log(error);
    }
}


// let obj = {
//     query: 'Narendra Modi',
//     categories: ['politics', 'top'],
//     languages: ['en', 'hi'],
//     countries: ['in', 'us']
// }