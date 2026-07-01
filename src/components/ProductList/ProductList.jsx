
import { useState } from "react";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import ProductCard from "../ProductCard/ProductCard";

function ProductList({ products,addToCart }) {

  const [category,setCategory]=useState("Tous")

  const  filteredProducts=category==="Tous"? products :products.filter((product)=>product.category===category)
  return (
    <div className="container mt-5">

      <h2 className="mb-4 ">
        Nos Produits
      </h2>
      <CategoryFilter setCategory={setCategory}/>
      <div className="row">
        {
          filteredProducts.map((product) => (
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