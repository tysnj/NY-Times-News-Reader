import styled from 'styled-components';
import { Container } from '../../../globalStyles';
import { Link } from 'react-router-dom'

export const StoriesContainer = styled(Container)`
  ${Container}
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 75%;
  height: 100%;
  margin-top: 10px;
`

export const StoryWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  color: #000;
  padding: .8rem;
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
`
