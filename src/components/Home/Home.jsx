import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import "./Home.css";

function Home({ products, addToCart }) {
  return (
    <>
      <section className="hero-banner py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6 text-center text-lg-start">
              <span className="hero-subtitle text-primary fw-semibold text-uppercase tracking-wider">
                Nouvelle Collection 2026
              </span>
              <h1 className="hero-title fw-bold my-3">
                Trouvez les meilleurs produits au meilleur prix
              </h1>
              <p className="hero-text text-muted mb-4">
                Découvrez une sélection de produits modernes, pratiques et de qualité pour répondre à tous vos besoins.
              </p>
              <a href="#produits" className="btn btn-primary btn-lg px-4 fs-6 fw-semibold">
                Découvrir
              </a>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src="/images/hero.png"
                alt="MyShop Banner"
                className="img-fluid hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Nos Catégories</h2>
          <p className="text-muted">
            Choisissez la catégorie qui vous intéresse.
          </p>
        </div>
        
        <div className="row g-4 text-center">
          <div className="col-6 col-md-3">
            <div className="category-item border p-4 bg-white shadow-sm">
              <div className="category-img-container mb-3">
                <img src="/images/souris.png" alt="Électronique" className="img-fluid" />
              </div>
              <h5 className="fw-bold fs-6 m-0">Électronique</h5>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className="category-item border p-4 bg-white shadow-sm">
              <div className="category-img-container mb-3">
                <img src="/images/lampe.png" alt="Maison" className="img-fluid" />
              </div>
              <h5 className="fw-bold fs-6 m-0">Maison</h5>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className="category-item border  p-4 bg-white shadow-sm">
              <div className="category-img-container mb-3">
                <img src="/images/sac.png" alt="Mode" className="img-fluid" style={{ filter: 'hue-rotate(45deg)' }} />
              </div>
              <h5 className="fw-bold fs-6 m-0">Mode</h5>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className="category-item border  p-4 bg-white shadow-sm">
              <div className="category-img-container mb-3">
                <img src="/images/sac.png" alt="Accessoires" className="img-fluid" />
              </div>
              <h5 className="fw-bold fs-6 m-0">Accessoires</h5>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-5" id="produits">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold m-0">Produits Populaires</h2>
          <Link to="/" className="text-primary fw-semibold text-decoration-none">
            Voir tout &rarr;
          </Link>
        </div>
        
        <div className="row">
          {products.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
          </div>
      </section>
      <section className="promo-banner py-5 bg-dark text-white my-4 rounded-4 mx-3">
        <div className="container text-center py-4">
          <h2 className="fw-bold mb-3">Offres spéciales jusqu'à -30%</h2>
          <p className="opacity-75 mb-4 max-w-500 mx-auto">
            Profitez de nos meilleures promotions avant la fin de l'offre. Livraisons rapides partout au Maroc.
          </p>
          <Link className="btn btn-light btn-lg px-4 fw-semibold text-dark" to="/"> 
            Acheter Maintenant 
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;






  