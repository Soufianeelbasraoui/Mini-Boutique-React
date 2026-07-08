const CATEGORIES = ['Tous', 'Électronique', 'Maison', 'Accessoires', 'Mode'];

function CategoryFilter({ setCategory, activeCategory }) {
  return (
    <div className="d-flex flex-wrap gap-2 mb-4">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          className={`btn btn-sm ${activeCategory === cat ? 'btn-primary' : 'btn-outline-secondary'}`}
          onClick={() => setCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;