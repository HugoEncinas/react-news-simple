import React, {useState, useEffect} from 'react';
import Article from './Article';

const Newsfeed = () => {
    const [articles, setArticles] = useState([]);
    const [countryCode, setCountryCode] = useState('us');
    const [searchTerm, setSearchTerm] = useState('');

    const changeCountry = (ev) => {
        setCountryCode(ev.target.value);
    }

    const searchNews = (ev) => {
        if (ev.key === 'Enter') {
            setSearchTerm(ev.target.value);
            let input = document.querySelector('#search');
            input.value = '';
        }
    }

    useEffect(() => {
        const apiKey = '05999112ed464d9b9cccbaa799a9405f';
        const url = `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${apiKey}&q=${searchTerm}`
        fetch(url)
        .then(res => res.json())
        .then((data) => {
            setArticles(data.articles);
        })
        .catch(console.log)
    }, [countryCode, searchTerm]);

    return (
        <>
            <h2>Newsfeed</h2>
            <select onChange={changeCountry}>
                <option value="us">United Staes</option>
                <option value="mx">Mexico</option>
                <option value="fr">France</option>
            </select>
            <input id="search" type="search" onKeyPress={searchNews}/>
            {
                articles.map((item, index) => {
                    return (
                        <Article article={item} key={index}></Article>
                    )
                })
            }
            {
                articles.length === 0 &&
                (<div>Error: no news available</div>)
            }
        </>
    )
}

export default Newsfeed;