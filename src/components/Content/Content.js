import React from 'react'
import Stories from './Stories/Stories'
import Categories from './Categories/Categories'
import StoryDetails from './StoryDetails/StoryDetails'
// import Error from '../View/Error/Error' TODO: create Error component for friendly display


const Content = ({error, category, changeCategory, stories, pageView, changeView, storyLinks, selectedStory, changeStory}) => {
  const handleViewSelection = (view) => changeView(view)
  const handleCategorySelection = (section) => changeCategory(section)
  const handleStorySelection = (story) => changeStory(story)

  return (
    <>
      {error && <div>{error}</div>}
      {!error && selectedStory && <StoryDetails details={selectedStory}/>}
      {!error && pageView === 'list' && <Stories category={category} stories={stories} storyLinks={storyLinks} updateView={handleViewSelection} updateStory={handleStorySelection}/>}
      {!error && pageView === 'categories' && <Categories category={category} updateCategory={handleCategorySelection} updateView={handleViewSelection}/>}
    </>
  )
}

export default Content
