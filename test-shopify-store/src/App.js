import logo from './logo.svg';
import './App.css';
import ProductList from './graphqlFetch';

function App() {
  return (
    <div className="App">
      <h1>My Shopify Store</h1>
      <ProductList />
    </div>
  );
}

export default App;
