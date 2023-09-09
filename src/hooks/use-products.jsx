import { useState, useEffect } from 'react';
export default function useProducts({ salesOnly }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        setLoading(true);
        setError(undefined);

        fetch(`data/${salesOnly ? 'sale_' : ''}products.json`)
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
    }, [salesOnly]);

    return [products, loading, error];
}
