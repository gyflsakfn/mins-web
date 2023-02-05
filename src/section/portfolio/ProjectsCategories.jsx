import React, { useState } from 'react'
import CategoryButton from './CategoryButton'

const ProjectsCategories = ({ categories, setFilters }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const changeCategoryHandler = (activeCat) => {
    setActiveCategory(activeCat);
    setFilters(activeCat);
  }
  return (
    <div className='portfolio__categories'>
      {
        categories.map(category => (
          <CategoryButton key={category} category={category} onChangeCategory={() => changeCategoryHandler(category)} className={`btn cat__btn ${activeCategory === category ? 'primary' : 'light'}`} />
        ))
      }
    </div>
  )
}

export default ProjectsCategories