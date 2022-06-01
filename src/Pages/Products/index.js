import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Products() {
  return (
    <div className="products">
      <div className="productsNav" style={{ fontSize: 'inherit' }}>
        <Link to="/products/search"> Search </Link>
        <Link to="/products/list"> List </Link>
        <Link to="/products/add"> Add </Link>
      </div>

      <Outlet />
    </div>
  );
}

export default Products;
