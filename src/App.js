import './App.css';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="App">
    <ProductDetail
      name="Producto Ejemplo"
      description="Esta es una descripción de ejemplo para el producto."
      price="$99.99"
      sku="ABC123"
      availableQuantity={10}
    />
  </div>
  );
}

export default App;
