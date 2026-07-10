import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import './Home.css';

function Home({ products, addToCart }) {
  return (
    <>

      <section className="hero-banner py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6 text-center text-lg-start">
              <span className="hero-subtitle text-primary fw-semibold text-uppercase">
                Nouvelle Collection 2026
              </span>
              <h1 className="hero-title fw-bold my-3">
                Trouvez les meilleurs produits au meilleur prix
              </h1>
              <p className="hero-text text-muted mb-4">
                Découvrez une sélection de produits modernes, pratiques et de qualité pour répondre à tous vos besoins.
              </p>
              <a href="#produits" className="btn btn-primary btn-lg px-4 fw-semibold">
                Découvrir
              </a>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src="/images/souris.png"
                alt="MyShop Banner"
                className="img-fluid hero-image"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="container py-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Nos Catégories</h2>
          <p className="text-muted">Choisissez la catégorie qui vous intéresse.</p>
        </div>
        <div className="row g-4 text-center">
          {[
            { label: 'Électronique', img: '/images/souris.png' },
            { label: 'Maison', img: '/images/lampe.png' },
            { label: 'Mode', img: '/images/sac.png' },
            { label: 'Accessoires', img: '/images/sac.png' },
          ].map((cat) => (
            <div key={cat.label} className="col-6 col-md-3">
              <div className="category-item border  p-4 bg-white shadow-sm">
                <div className="category-img-container mb-3">
                  <img src={cat.img} alt={cat.label} className="img-fluid" />
                </div>
                <h5 className="fw-bold fs-6 m-0">{cat.label}</h5>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="container py-5" id="produits">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold m-0">Produits Populaires</h2>
          <Link to="/products" className="text-primary fw-semibold text-decoration-none">
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
      <section className="promo-banner py-5 bg-dark text-white my-4  mx-3">
        <div className="container text-center py-3">
          <h2 className="fw-bold mb-3">Offres spéciales jusqu&apos;à -30%</h2>
          <p className="text-white-50 mb-4">
            Profitez de nos meilleures promotions avant la fin de l&apos;offre. Livraisons rapides partout au Maroc.
          </p>
          <Link className="btn btn-light btn-lg px-4 fw-semibold text-dark" to="/products">
            Acheter Maintenant
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;