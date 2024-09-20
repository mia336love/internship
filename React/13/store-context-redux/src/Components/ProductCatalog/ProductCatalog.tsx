import ArrProducts from "../../Data/ArrProducts";
import IProduct from "../../Data/Interfaces/IProduct";
import ProductItem from "../ProductItem/ProductItem";
import './ProductCatalog.css';
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../Reducers/cartReducer";

const ProductCatalog = () => {
    const dispatch = useDispatch();

    const handleAddToCart = (product: IProduct) => {
        dispatch(addProductToCart(product));
    };

    return (
        <div>
            <h2>Catalog</h2>
            <div className="catalog-items">
                {ArrProducts.map((product) => (
                    <ProductItem
                        key={product.id}
                        product={product}
                        onAddToCart={handleAddToCart}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductCatalog;
