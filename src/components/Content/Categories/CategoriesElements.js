import styled from 'styled-components';
import { Container } from '../../../globalStyles';
import { Link } from 'react-router-dom'

export const CategoriesContainer = styled(Container)`
  ${Container}
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 300px;
  height: 100%;
  margin-top: 10px;
`

export const CategoryWrapper = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
  color: #000;
  /* padding: .8rem;  */
  width: 100%;
  height: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`