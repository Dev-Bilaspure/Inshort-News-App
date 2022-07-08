import { useState, useEffect, useContext } from 'react';

import InfiniteScroll from 'react-infinite-scroll-component';

//components
import Article from './Article';
import { data } from '../sampleData';
import { NewsDataContext } from '../Contexts/NewsDataContext';
import { CircularProgress } from '@material-ui/core';

const Articles = () => {

    // const [news, setNews] = useState([]);
    const {newsObjectArray, isFetching} = useContext(NewsDataContext);
    const [page, setPage] = useState(0);


    useEffect(() => {
        
    }, [newsObjectArray])

    console.log('length', newsObjectArray.length)
    return (
        <InfiniteScroll
            dataLength={newsObjectArray.length}
            next={() => setPage(page => page + 1)}
            hasMore={true}
        >
            {
                !isFetching ?
                newsObjectArray.map(newsObj => (
                    <Article newsObj={newsObj} />
                )) :
                <div style={{width: '100%', textAlign: 'center', height: 50}}>
                    <CircularProgress style={{color: 'rgb(169,19,8)'}} />
                </div>
            }
        </InfiniteScroll>
    )
}

export default Articles;