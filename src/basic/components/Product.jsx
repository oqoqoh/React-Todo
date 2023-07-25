import React, { useEffect, useState } from 'react';

export default function Product() {
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);

    const [checkSales, setCheckSales] = useState(false);
    const handleCheckbox = () => setCheckSales((prev) => !prev);

    useEffect(() => {
        fetch(`data/${checkSales ? 'sale_' : ''}products.json`)
            .then((res) => res.json())
            .then((data) => {
                console.log('🔥 received datas');
                console.log('🍇 datas ::', data);
                setProducts(data);
            });

        return () => {
            console.log('🧹clean');
        };
    }, [checkSales]);
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
