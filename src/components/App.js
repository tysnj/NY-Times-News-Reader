import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import GlobalStyle from '../globalStyles';
import NavBar from './NavBar/NavBar';
import Page from './Page/Page';
import { fetchStories, cleanData } from '../util';

const App = () => {
  const [category, setCategory] = useState('home')
  const [stories, setStories] = useState([])
  const [pageView, setPageView] = useState('home')
  const [error, setError] = useState(null);

  const getStories = useRef(() => {})
  
  useEffect(() => {
    getStories.current()
    .then(data => setStories(cleanData(data)))
    .catch(error => setError(`Something's gone wrong. Please try again`))
  }, [category])

  getStories.current = () => {
    const requestURL = 'https://api.nytimes.com/svc/topstories/v2/'
    const apiKey = process.env.REACT_APP_NYT_API_KEY
    return fetchStories(requestURL + category + '.json?api-key=' + apiKey)
  }

  const changeView = (view) => {
    setPageView(view)
  }

  const changeCategory = (section) => {
    setCategory(section)
  }

  return (
    <Router>
      <GlobalStyle />
      <NavBar 
        changeView={changeView}
      />
      <Switch>
        <Route exact path='/{$pageView}'
          render={() => (
            <Page
              error={error}
              pageView={pageView}
              category={category}
              changeCategory={changeCategory}
              stories={stories}
            /> 
          )}
        />
        <Redirect to='/home' />
      </Switch>

    </Router>
  );
}

export default App;
