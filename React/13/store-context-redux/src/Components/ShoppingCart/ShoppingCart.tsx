import { useSelector } from "react-redux"
import { RootState } from "../../Reducers/RootState"
import './ShoppingCart.css'

const ShoppingCart = () => {

    const cartProducts = useSelector((state: RootState) => state.cart.products)
    return (
        <div>
            <h3>Your cart:</h3>

            {cartProducts.length === 0 ? (<p>Cart is empty</p>) : (
                <div className="cart">
                    <ul>
                        {cartProducts.map((product) => (
                            <li className="cart-item">
                                <img className="cart-pr-img" src={product.imageUrl} alt="" />
                                <p className="cart-pr-name">{product.name}</p>
                                <p className="cart-pr-price">{product.price}₽</p>
                            </li>

                        ))}
                    </ul>
                </div>
            )}
        </div>
    )


}

export default ShoppingCart