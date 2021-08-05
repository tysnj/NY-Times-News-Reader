import React from 'react'
import { StoryContainer, StoryHeadline, StoryAuthor } from './StoryDetailsElements'

const StoryDetails = ({ details }) => {
  return (
    <StoryContainer>
      <StoryHeadline>
        {details.title}
      </StoryHeadline>
      <StoryAuthor>
        {details.byline}
      </StoryAuthor>
    </StoryContainer>
  )
}

export default StoryDetails
