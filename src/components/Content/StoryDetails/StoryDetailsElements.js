import styled from 'styled-components';
import { Container } from '../../../globalStyles';

export const StoryContainer = styled(Container)`
  ${Container}
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 75%;
  height: 100%;
  margin-top: 30px;
`

export const StoryHeadline = styled.h1`
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
`

export const StoryAuthor = styled.h2`
  width: 100%;
  height: 100%;
  font-size: .8rem;
  margin-bottom: 1rem;
`

export const StoryType = styled.h3`
  width: 100%;
  height: 100%;
  font-size: .8rem;
  margin-bottom: 2rem;
`

export const StoryInfo = styled.p`
  width: 100%;
  height: 100%;
  font-size: 1rem;
`

export const StoryAnchor = styled.a`
  width: 100%;
  height: 100%;
  font-size: .8rem;
  color: #181818;
`

export const StoryImage = styled.img`
  margin-top: 1rem;
  max-width: 100%;
`

export const ImageCopyright = styled.span`
  width: 100%;
  height: 100%;
  font-size: .8rem;
  color: #181818;
`