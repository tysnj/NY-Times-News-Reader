import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import GlobalStyle from '../globalStyles';
import NavBar from './NavBar/NavBar';
import Content from './Content/Content';
import { fetchStories, cleanData } from '../util';

const App = () => {
  const [category, setCategory] = useState('home')
  const [stories, setStories] = useState([])
  const [pageView, setPageView] = useState('list')
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

  const changeCategory = (section) => {
    setCategory(section)
  }

  const changeView = (selection) => {
    setPageView(selection)
  }

  return (
    <Router>
      <GlobalStyle />
      <NavBar 
        changeCategory={changeCategory}
      />
      <Switch>
        <Route 
          exact 
          path='/home'
          render={() => (
            <Content
              pageView={pageView}
              changeView={changeView}
              error={error}
              category={category}
              changeCategory={changeCategory}
              stories={stories}
            /> 
          )}
        />
        <Route

        />
        <Redirect to='/home' />
      </Switch>

    </Router>
  );
}

export default App;
