import React from 'react'

import {
  StoriesContainer,
  StoryAuthor,
  StoryWrapper,
  StoryHeadline
} from './StoriesElements'

const Stories = ({stories, storyLinks, changeView}) => {
  return (
    <StoriesContainer>
      {stories.map((story, i) => 
        <StoryWrapper 
          to={`/${storyLinks[i]}`} 
          key={i}
          onClick={() => {
            changeView('details')
          }}
          >
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
