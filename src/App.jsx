

import Header from './Statics/header';
import Footer from './Statics/footer';
import ProductList from './components/ProductList';
import Product from './data/Product';

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      <Header />

      <main style={{ flex: 1, padding: "20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px", fontSize: "24px" }}>Luxury Handbags Collection</h2>
        {/* Pass the Product array into ProductList */}
        <ProductList products={Product} />
      </main>

      <Footer />
    </div>
  );
}

export default App;