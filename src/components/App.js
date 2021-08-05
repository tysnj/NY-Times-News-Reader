import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import GlobalStyle from '../globalStyles';
import NavBar from './NavBar/NavBar';
import Content from './Content/Content';
import { fetchStories, cleanData } from '../util';

const App = () => {
  const [pageView, setPageView] = useState('list')
  const [category, setCategory] = useState('home')
  const [stories, setStories] = useState([])
  const [storyLinks, setStoryLinks] = useState([])
  const [selectedStory, setSelectedStory] = useState(null)
  const [error, setError] = useState(null);

  const getStories = useRef(() => {})
  
  useEffect(() => {
    getStories.current()
    .then(data => setStories(cleanData(data)))
    .catch(error => setError(`Something's gone wrong. Please try again`))
  }, [category])

  useEffect(() => {
    const paths = stories.map((story) => {
      return story.url.split('/').pop().split('.').shift();
    });
    setStoryLinks(paths);
  }, [stories]);

  getStories.current = () => {
    const requestURL = 'https://api.nytimes.com/svc/topstories/v2/'
    const apiKey = process.env.REACT_APP_NYT_API_KEY
    return fetchStories(requestURL + category + '.json?api-key=' + apiKey)
  }

  const changeCategory = (section) => {
    setCategory(section)
  }

  const changeView = (view) => {
    setPageView(view)
  }

  const changeStory = (selection) => {
    setSelectedStory(selection)
  }

  return (
    <Router>
      <GlobalStyle />
      <NavBar 
        changeCategory={changeCategory}
        changeView={changeView}
        changeStory={changeStory}
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
              storyLinks={storyLinks}
              changeStory={changeStory}
            /> 
          )}
        />
        <Route
          exact
          path='/categories'
          render={() => (
            <Content
              pageView={pageView}
              changeView={changeView}
              error={error}
              category={category}
              changeCategory={changeCategory}
              stories={stories}
              storyLinks={storyLinks}
              changeStory={changeStory}
            /> 
          )}
        />
        <Route
          exact
          path='/:storyPath'
          render={({ match }) => {
            const { storyPath } = match.params;
            const index = storyLinks.indexOf(storyPath);
            if (index >= 0) {
              const story = stories[index];
              return <Content selectedStory={story} path={storyPath} />;
            }
            return <Redirect to='/' />;
          }}
        />
        <Redirect to='/home' />
      </Switch>
    </Router>
  );
}

export default App;
