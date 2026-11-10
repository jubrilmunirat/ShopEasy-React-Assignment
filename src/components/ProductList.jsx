
import ProductCard from './ProductCard';

function ProductList({ products }) {
    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
            padding: "20px"
        }}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductList;