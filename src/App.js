// import logo from './logo.svg';
// import './App.css';
// import axios from 'axios';
// import { Loading } from './Loading';
import React, { useState, useEffect} from 'react';
// Note that useState is a hook that allow you to use State without class component
const App = () => {
  // Set state  **useState keeps the state of data like int, str, arr, obj etc**
  const [news, setNews] = useState([]); //random naming convention was used

  const fetchNews = () => {
    fetch('http://hn.algolia.com/api/v1/search?query=react')
    .then(results => results.json())
    .then(data => setNews(data.hits)) //hits is an object we aree retrieving from data
    .catch(err => console.log(err))
  };

  useEffect(() => {
    fetchNews();
  })


  return(
    <div>
      <h2>The News</h2>
      <div>
        { news.map((n, i) => (
          <p key={i}> {n.title} </p>
        ))}
      </div>
    </div>
  );



}



export default App;
