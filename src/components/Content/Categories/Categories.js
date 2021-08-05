import React from 'react'
import { CategoriesContainer, CategoryWrapper } from './CategoriesElements'

const Categories = ({handleCategory, changeView}) => {
  const categories = ['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'home', 'insider', 'magazine', 'movies', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world']
  return (
    <CategoriesContainer>
      {categories.map((category, i) => 
        <CategoryWrapper 
          key={i}
          onClick={() => {
            handleCategory(category)
            changeView('list')
          }} 
          to={`/${category}`} >
          {category}
        </CategoryWrapper>
      )}
    </CategoriesContainer>
  )
}

export default Categories
