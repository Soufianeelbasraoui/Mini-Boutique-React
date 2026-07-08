import { useState } from 'react';
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import ProductCard from '../ProductCard/ProductCard';

function ProductList({ products, addToCart }) {
  const [category, setCategory] = useState('Tous');

  const filteredProducts =
    category === 'Tous' ? products : products.filter((product) => product.category === category);

  return (
    <div className="container mt-5">
      <div className="mb-4">
        <h2 className="fw-bold mb-1">Nos Produits</h2>
        <p className="text-muted">{filteredProducts.length} produit(s) trouvé(s)</p>
      </div>
      <CategoryFilter setCategory={setCategory} activeCategory={category} />
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))
        ) : (
          <p className="text-muted text-center py-5">Aucun produit dans cette catégorie.</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;