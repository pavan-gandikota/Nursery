import ProductCard from '../components/ProductCard';

const plants = [
  { id: 1, name: "Snake Plant", price: 250, image: "/images/snake.jpg", category: "Indoor" },
  { id: 2, name: "Peace Lily", price: 300, image: "/images/peace.jpg", category: "Indoor" },
  { id: 3, name: "Aloe Vera", price: 150, image: "/images/aloe.jpg", category: "Medicinal" },
  { id: 4, name: "Fern", price: 180, image: "/images/fern.jpg", category: "Outdoor" },
  { id: 5, name: "Money Plant", price: 200, image: "/images/money.jpg", category: "Indoor" },
  { id: 6, name: "Tulsi", price: 100, image: "/images/tulsi.jpg", category: "Medicinal" }
];

const ProductListing = () => {
  return (
    <div className="product-listing">
      <h2>Shop Plants</h2>
      <div className="products">
        {plants.map(plant => (
          <ProductCard key={plant.id} product={plant} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
