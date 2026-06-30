
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="product-card">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <h5>{product.name}</h5>
          <h4>{product.price} DH</h4>
          <button className="btn btn-primary btn-sm">
            Ajouter
          </button>
        </div>

      </div>
    </div>
  );
}

export default ProductCard;
