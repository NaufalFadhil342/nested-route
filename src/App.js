import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Search from './Components/Search/search';
import AddProduct from './Components/Add/addProducts';
import ListProducts from './Components/List/listProducts';
import ProductDisplay from './Pages/Products/displayProducts';

const Home = React.lazy(() => import('./Pages/Home/index'));
const Products = React.lazy(() => import('./Pages/Products/index'));
const Login = React.lazy(() => import('./Pages/Login/index'));

function App() {
  return (
    <Router>
      <Suspense fallback={<p style={{ textAlign: 'center', margin: '25% 0' }}>...Loading</p>}>
        <nav>
          <li>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/login">Login</Link>
          </li>
        </nav>
        <Routes fallback="...Loading">
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />}>
            <Route path="search" element={<Search />} />
            <Route path="list" element={<ListProducts />} />
            <Route path="add" element={<AddProduct />} />
            <Route path=":id" element={<ProductDisplay />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
