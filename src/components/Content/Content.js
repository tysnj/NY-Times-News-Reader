import React from 'react'
import Stories from './Stories/Stories'
import Categories from './Categories/Categories'
import StoryDetails from './StoryDetails/StoryDetails'
// import Error from '../View/Error/Error' TODO: create Error component for friendly display


const Content = ({error, category, changeCategory, stories, pageView, changeView, storyLinks, selectedStory}) => {
  
  const handleViewSelection = (view) => changeView(view)
  const handleCategorySelection = (section) => changeCategory(section)

  return (
    <>
      {error && <div>{error}</div>}
      {!error && pageView === 'list' && <Stories stories={stories} storyLinks={storyLinks} changeView={handleViewSelection}/>}
      {!error && pageView === 'categories' && <Categories handleCategory={handleCategorySelection} changeView={handleViewSelection}/>}
      {!error && pageView === 'details' && selectedStory && <StoryDetails/>}
    </>
  )
}

export default Content
