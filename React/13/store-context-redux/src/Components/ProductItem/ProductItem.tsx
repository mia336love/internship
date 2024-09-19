import IProduct from "../../Data/Interfaces/IProduct"

interface IProductItemProps {
    product: IProduct;
    onAddToCart: (product: IProduct) => void
}

const ProductItem = ({ product, onAddToCart }: IProductItemProps) => {
    <div>
        <div className="item">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.artist} — {product.name}</h3>
            <p>{product.genres.map((genre) => (
                <span>{genre}</span>
            ))}</p>
            <p>Released: {product.year}</p>
            <p>Price: ${product.price}</p>

            <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
    </div>

}

export default ProductItem