import React from 'react'

import {
  StoriesContainer,
  StoryAuthor,
  StoryWrapper,
  StoryHeadline
} from './StoriesElements'

const Stories = ({handleSelection, stories}) => {
  return (
    <StoriesContainer>
      {stories.map((story, i) => 
        <StoryWrapper handleSelection={handleSelection} key={i}>
          <StoryHeadline>
            {story.title}
          </StoryHeadline>
          <StoryAuthor>
            {story.byline}
          </StoryAuthor>
        </StoryWrapper>  
      )}
    </StoriesContainer>
  )
}

export default Stories;
