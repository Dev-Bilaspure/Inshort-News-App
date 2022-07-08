import axios from "axios";

export const fetchNewsByParams = async(paramObj, updateNewsArticles) => {
    console.log('waiting');
    try {
        const news = await axios.post(
            'http://localhost:5000/api/filterednews', 
            paramObj
        )
        updateNewsArticles(news.data.results);
        // console.log(news.data.results[0]);
    } catch (error) {
        console.log(error);
    }
}

export const fetchAllNews = async(updateNewsArticles) => {
    console.log('waiting');
    try {
        const news = await axios.get(
            'http://localhost:5000/api/allnews'
        )
        // console.log({news});
        let tempArr = news.data.allNewsSets;
        let newsAtriclesTemp = [];

        for(let i=0;i<10;i++) {
            for(let j=0;j<tempArr.length;j++) {
                newsAtriclesTemp.push(tempArr[j][i]);
            }
        }
        // console.log(newsAtriclesTemp[0]);
        updateNewsArticles(newsAtriclesTemp)
    } catch(error) {
        console.log(error);
    }
}


// let obj = {
//     query: 'Narendra Modi',
//     categories: ['politics', 'top'],
//     languages: ['en', 'hi'],
//     countries: ['in', 'us']
// }