import './CategorySlider.css'

export function CategorySlider({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="category-slider">
      <div className="category-buttons">
        {categories.map(category => (
          <button
            key={category}
            className={`category-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}