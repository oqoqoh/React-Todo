import React, { useEffect, useState } from 'react';

export default function Product() {
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);

    const [checkSales, setCheckSales] = useState(false);
    const handleCheckbox = () => setCheckSales((prev) => !prev);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        setLoading(true);
        setError(undefined);

        fetch(`data/${checkSales ? 'sale_' : ''}products.json`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);

                console.log('🔥 received datas');
                console.log('🍇 datas ::', data);
            })
            .catch((e) => setError('ERROR!!!'))
            .finally(() => setLoading(false));

        return () => {
            console.log('🧹clean');
        };
    }, [checkSales]);
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
