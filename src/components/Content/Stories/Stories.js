import React from 'react'

import {
  StoriesContainer,
  StoryAuthor,
  StoryWrapper,
  StoryHeadline,
  StoryType
} from './StoriesElements'

const Stories = ({stories, storyLinks, updateView, updateStory}) => {
  return (
    <StoriesContainer>
      {stories.map((story, i) => 
        <StoryWrapper 
          to={`/${storyLinks[i]}`} 
          key={i}
          onClick={() => {
            updateView('details')
            updateStory(story)
          }}
          >
          <StoryHeadline>
            {story.title}
          </StoryHeadline>
          <StoryAuthor>
            {story.byline}
          </StoryAuthor>
          <StoryType>
            {story.section} news
          </StoryType>
        </StoryWrapper>  
      )}
    </StoriesContainer>
  )
}

export default Stories;
