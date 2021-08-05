import styled from 'styled-components';
import { Container } from '../../../globalStyles';

export const StoryContainer = styled(Container)`
  ${Container}
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