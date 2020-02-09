import React, { useEffect, useState} from 'react'
import Article from './Article';

import axios from 'axios';

export default function News({classes}){

    const [articles, setArticles] = useState([]);

    useEffect(()=>{
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=b67bfc7efc0a47af8d8fc8875a9c88ac`)
        .then(res => {
            console.log(res.data.articles)
            setArticles(res.data.articles)
        })
        .catch(err =>{
            console.log(err)
        });

    },[]);


    return(
        <div className={classes().content}>
            <div className={classes().toolbar}/>
            {articles.map((article) =>(
                <Article article={article} key={article.title}/>
            ))}
        </div>
    )
}