import React from 'react'
import { StoryContainer, StoryHeadline, StoryAuthor, StoryType, StoryInfo, StoryAnchor, StoryImage, ImageCopyright } from './StoryDetailsElements'

const StoryDetails = ({ details }) => {
  return (
    <StoryContainer>
      <StoryHeadline>
        {details.title}
      </StoryHeadline>
      <StoryAuthor>
        {details.byline}
      </StoryAuthor>
      <StoryType>
        {details.section} news
      </StoryType>
      <StoryInfo>
        {details.abstract}
      </StoryInfo>
      <StoryAnchor href={details.short_url} target='_blank'>
        View full article
      </StoryAnchor>
      <StoryImage
        src={details.multimedia[0].url}
        alt={details.multimedia[0].caption}
      />
      <ImageCopyright>
        {details.multimedia[0].copyright}
      </ImageCopyright>
    </StoryContainer>
  )
}

export default StoryDetails
