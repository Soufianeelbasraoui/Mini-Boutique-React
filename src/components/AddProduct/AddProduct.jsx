import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required('Le nom est obligatoire'),
  price: yup
    .number()
    .typeError('Le prix est obligatoire')
    .positive('Le prix doit être supérieur à 0')
    .required('Le prix est obligatoire'),
  category: yup.string().required('La catégorie est obligatoire'),
  image: yup
    .string()
    .url("L'URL de l'image est invalide")
    .required("L'URL de l'image est obligatoire"),
});

function AddProduct({ addProduct }) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const newProduct = {
      id: Date.now(),
      name: data.name,
      price: Number(data.price),
      category: data.category,
      image: data.image,
    };

    addProduct(newProduct);
    reset();
    navigate('/products');
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-7 col-lg-6">
          <div className="card border-0 shadow-sm p-4 rounded-3">
            <h2 className="text-center mb-1 fw-bold">Ajouter un Produit</h2>
            <p className="text-center text-muted mb-4">Remplissez les informations ci-dessous</p>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="mb-3">
                <label className="form-label fw-semibold">Nom du produit</label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  placeholder="Ex: Casque Audio Pro"
                  {...register('name')}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name.message}</div>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Prix (DH)</label>
                <input
                  type="number"
                  step="0.01"
                  className={`form-control ${errors.price ? 'is-invalid' : ''}`}
                  placeholder="Ex: 99.99"
                  {...register('price')}
                />
                {errors.price && (
                  <div className="invalid-feedback">{errors.price.message}</div>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Catégorie</label>
                <select
                  className={`form-select ${errors.category ? 'is-invalid' : ''}`}
                  {...register('category')}
                >
                  <option value="">Choisir une catégorie...</option>
                  <option value="Électronique">Électronique</option>
                  <option value="Maison">Maison</option>
                  <option value="Accessoires">Accessoires</option>
                  <option value="Mode">Mode</option>
                </select>
                {errors.category && (
                  <div className="invalid-feedback">{errors.category.message}</div>
                )}
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">URL de l&apos;image</label>
                <input
                  type="text"
                  className={`form-control ${errors.image ? 'is-invalid' : ''}`}
                  placeholder="https://example.com/image.jpg"
                  {...register('image')}
                />
                {errors.image && (
                  <div className="invalid-feedback">{errors.image.message}</div>
                )}
              </div>

              <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold">
                Ajouter le produit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;