import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Page from './Page/Page';
import { fetchStories } from '../util'

const App = () => {
  const [category, setCategory] = useState('home')
  const [stories, setStories] = useState([])
  const [pageView, setPageView] = useState('home')
  
  const getStories = useRef(() => {})
  
  useEffect(() => {
    getStories.current()
  }, [category])

  getStories.current = async () => {
    let requestURL = 'https://api.nytimes.com/svc/topstories/v2/'
    fetchStories(requestURL + category + '.json?api-key=' + )
    .then(data => setStories(data))
    .catch(error => console.error(error))
  }

  const changeView = (view) => {
    setPageView(view)
  }

  const changeCategory = (section) => {
    setCategory(section)
  }

  return (
    <Router>
      <NavBar 
        changeView={changeView}
      />
      <Switch>
        <Route exact path='/{$pageView}'
          render={() => (
            <Page
              pageView={pageView}
              category={category}
              changeCategory={changeCategory}
              stories={stories}
            /> 
          )}
        />
        <Redirect to='/' />
      </Switch>

    </Router>
  );
}

export default App;
