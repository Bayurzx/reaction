// import logo from './logo.svg';
// import './App.css';
// import axios from 'axios';
// import { Loading } from './Loading';
import React, { useState, useEffect} from 'react';
// Note that useState is a hook that allow you to use State without class component
const App = () => {
  // Set state  **useState keeps the state of data like int, str, arr, obj etc**
  const [news, setNews] = useState([]); //random naming convention was used
  const [query, setQuery] = useState(' ');
  const [url, setUrl] = useState(`http://hn.algolia.com/api/v1/search?query=${query}`);

  const fetchNews = () => {
    fetch(url)
    .then(results => results.json())
    .then(data => setNews(data.hits)) //hits is an object we aree retrieving from data
    .catch(err => console.log(err))
  };


// useState allows functional components to have state, like this.state in class components
// useEffect allows functional components to have lifecycle methods (such as componentDidMount,
// ...componentDidUpdate and componentWillUnmount) in one single API

// useEffect can take two arguments 1st arg is the function and the 2nd is the array that useEffect depends on its changes
  useEffect(() => {
    fetchNews()
  }, [url])

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)
  }

  return(
    <div>
      <form onSubmit = {handleSubmit}>
        <input type='text' value={query} onChange = {handleChange} />
        <button > Search </button>
      </form>
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
