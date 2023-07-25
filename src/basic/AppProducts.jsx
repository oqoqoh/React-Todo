import React, { useState } from 'react';
import Product from './components/Product';

export default function AppProducts() {
    const [showProducts, setShowProducts] = useState(false);
    return (
        <div>
            {showProducts && <Product />}
            <button onClick={() => setShowProducts((prev) => !prev)}>toggle</button>
        </div>
    );
}
