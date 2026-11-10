
function ProductCard({ product }) {
    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
            <div>
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-md"
                />
                <span className="inline-block text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md mt-3 font-medium">
                    {product.category}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="mt-1 mb-4 text-sm text-gray-600 h-12 overflow-hidden">
                    {product.description}
                </p>
            </div>

            <div className="mt-4">
                <div className="flex justify-between items-center mb-5">
                    <span className="text-lg font-bold text-green-600">
                        {product.price}
                    </span>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded ${product.instock ? 'text-green-700 bg-green-50' : 'text-red-700 bg-red-50'}`}>
                        {product.instock ? "In Stock" : "Out of Stock"}
                    </span>
                </div>

                <button
                    disabled={!product.instock}
                    className={`w-full py-2.5 px-4 rounded-md font-bold text-white transition-colors duration-200 ${product.instock
                        ? 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
                        : 'bg-gray-300 cursor-not-allowed'
                        }`}
                    onClick={() => alert(`Added ${product.name} to cart!`)}
                >
                    {product.instock ? "Add to Cart" : "Unavailable"}
                </button>
            </div>
        </div>
    );
}

export default ProductCard;