import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container text-center py-5 mt-5">
      <h1 className="display-1 fw-bold text-primary">404</h1>
      <h3 className="mb-3">Page introuvable</h3>
      <p className="text-muted mb-4">La page que vous cherchez n&apos;existe pas.</p>
      <Link to="/" className="btn btn-primary px-4">
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}

export default NotFound;