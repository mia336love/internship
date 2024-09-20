import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchProducts from "../../Actions/productActions";
import IProduct from "../../Data/Interfaces/IProduct";
import ProductItem from "../ProductItem/ProductItem";
import { RootState } from "../../Reducers/RootState";
import './ProductCatalog.css';

const ProductCatalog = () => {
    const dispatch = useDispatch();

    const products = useSelector((state: RootState) => state.products.products);


    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    const handleAddToCart = (product: IProduct) => {
        dispatch({ type: 'ADD', product });
    };

    return (
        <div>
            <h2>Catalog</h2>
            <div className="catalog-items">
                {products.length === 0 ? (
                    <p>Loading products...</p>
                ) : (
                    products.map((product) => (
                        <ProductItem
                            key={product.id}
                            product={product}
                            onAddToCart={handleAddToCart}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default ProductCatalog;
