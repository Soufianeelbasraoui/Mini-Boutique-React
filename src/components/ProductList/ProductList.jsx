
import ProductCard from "../ProductCard/ProductCard";

function ProductList({ products,addToCart }) {
  return (
    <div className="container mt-5">

      <h2 className="mb-4 ">
        Nos Produits
      </h2>
      <div className="row">
        {
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))
        }
      </div>

    </div>
  );
}

export default ProductList;