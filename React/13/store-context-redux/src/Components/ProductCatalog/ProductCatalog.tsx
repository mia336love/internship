import ArrProducts from "../../Data/ArrProducts"
import IProduct from "../../Data/Interfaces/IProduct"
import ProductItem from "../ProductItem/ProductItem"

import './ProductCatalog.css'

import { useDispatch } from "react-redux"


const ProductCatalog = () => {
    const dispatch = useDispatch()

    const handleAddToCart = (product: IProduct) => {
        dispatch({type: 'ADD', product})
    }

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
    )


}

export default ProductCatalog