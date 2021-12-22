import axios from "axios";

const fetchNews = async(paramObj, updateNewsArticles) => {
    console.log('waiting');
    try {
        const news = await axios.post(
            'http://localhost:5000/api/newsAPI', 
            paramObj
        )
        updateNewsArticles(news.data.results);
        console.log(news.data);
    } catch (error) {
        console.log(error);
    }
}

export default fetchNews;


// let obj = {
//     query: 'Narendra Modi',
//     categories: ['politics', 'top'],
//     languages: ['en', 'hi'],
//     countries: ['in', 'us']
// }