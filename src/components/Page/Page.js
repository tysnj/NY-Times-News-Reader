import React, { useState } from 'react'
import Home from '../View/Home/Home'
import Categories from '../View/Categories/Categories'
import StoryDetails from '../View/StoryDetails/StoryDetails'
// import Error from '../View/Error/Error' TODO: create Error component for friendly display


const Page = ({error, category, changeCategory, stories}) => {
  const [selectedStory, setSelectedStory] = useState(null)
  
  const handleSelection = (story) => setSelectedStory(story)
  return (
    <>
      {error && <div>{error}</div>}
      {!error && category === 'home' && <Home handleSelection={handleSelection}/>}
      {!error && category !== 'home' && <Categories/>}
      {!error && category !== 'home' && selectedStory && <StoryDetails selectedStory={selectedStory}/>}
    </>
  )
}

export default Page
