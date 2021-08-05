import React, { useState } from 'react'
import Stories from '../View/Stories/Stories'
import Categories from '../View/Categories/Categories'
import StoryDetails from '../View/StoryDetails/StoryDetails'
// import Error from '../View/Error/Error' TODO: create Error component for friendly display


const Content = ({error, category, changeCategory, stories, pageView, changeView}) => {
  const [selectedStory, setSelectedStory] = useState(null)
  
  const handleStorySelection = (story) => setSelectedStory(story)
  const handleCategorySelection = (section) => changeCategory(section)

  return (
    <>
      {error && <div>{error}</div>}
      {!error && pageView === 'list' && <Stories handleSelection={handleStorySelection} stories={stories}/>}
      {!error && pageView !== 'categories' && <Categories handleCategorySelection={handleCategorySelection}/>}
      {!error && pageView !== 'details' && selectedStory && <StoryDetails selectedStory={selectedStory}/>}
    </>
  )
}

export default Content
