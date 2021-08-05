import styled from 'styled-components';
import { Container } from '../../../globalStyles';
import { Link } from 'react-router-dom'

export const CategoriesContainer = styled(Container)`
  ${Container}
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 75%;
  height: 100%;
  margin-top: 10px;
`

export const CategoryWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  color: #000;
  padding: .8rem;
`