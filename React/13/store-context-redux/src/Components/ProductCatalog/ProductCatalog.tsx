import ArrProducts from "../../Data/ArrProducts"
import IProduct from "../../Data/Interfaces/IProduct"
import ProductItem from "../ProductItem/ProductItem"

const ProductCatalog = () => {

    const handleAddToCart = (product: IProduct) => { }
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