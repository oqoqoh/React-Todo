import React, { useState } from 'react';
import useProducts from '../../hooks/use-products';

export default function Product() {
    const [count, setCount] = useState(0);

    const [checkSales, setCheckSales] = useState(false);
    const [products, loading, error] = useProducts({ salesOnly: checkSales });
    const handleCheckbox = () => setCheckSales((prev) => !prev);

    if (loading) return <p>loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <input id="sale" type="checkbox" value={checkSales} onChange={handleCheckbox} />
            <label htmlFor="sale">🔥 Sales Products List</label>

            <ul>
                {products.map((product) => {
                    return (
                        <li key={product.id}>
                            <article>
                                <h3>{product.name}</h3>
                                <p>{product.price}</p>
                            </article>
                        </li>
                    );
                })}
            </ul>

            <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
        </div>
    );
}
