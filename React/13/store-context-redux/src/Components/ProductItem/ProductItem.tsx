import IProduct from "../../Data/Interfaces/IProduct"
import './ProductItem.css'

interface IProductItemProps {
    product: IProduct;
    onAddToCart: (product: IProduct) => void
}

const ProductItem = ({ product, onAddToCart }: IProductItemProps) => {

    return (
            <div className="item">
                <img className="cat-pr-img" src={product.imageUrl} alt={product.name} />
                <h3>{product.artist ? `${product.artist} — ${product.name}` : `${product.name}`}</h3>
                <p>{product.genres.length > 0 ? product.genres.join(' / ') : 'No genres available'}</p>
                <p>Released: {product.year}</p>
                <p>Price: {product.price}₽</p>

                <button onClick={() => onAddToCart(product)}>Add to Cart</button>
            </div>
    )
}

export default ProductItem