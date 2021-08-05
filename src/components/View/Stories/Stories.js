import React from 'react'

import {
  StoriesContainer,
  StoryAuthor,
  StoryWrapper,
  StoryHeadline
} from './StoriesElements'

const Stories = ({stories, storyLinks}) => {
  return (
    <StoriesContainer>
      {stories.map((story, i) => 
        <StoryWrapper to={`/${storyLinks[i]}`} key={i}>
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
