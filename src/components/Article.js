import React from 'react';

const Article = ({article}) => {
    return (
        <div className="article">
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <img src={article.urlToImage} alt={article.title}/>
        </div>
    )
}

export default Article;