import React from "react";

function CategoryFilter({ onSelectCategory, categories, selectedCategory }) {
  function handleClick(e){
    onSelectCategory(e.target.value)
  }
  let categoryInd = 0

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {
        categories.map(category => {
          categoryInd += 1
          let isSelected = selectedCategory === category ? "selected" : null
          return <button className={isSelected} onClick={handleClick} value={category} key={categoryInd}>{category}</button>
        })
      }
    </div>
  );
}

export default CategoryFilter;
