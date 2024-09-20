import { useSelector } from "react-redux"
import { RootState } from "../../Reducers/RootState"

const ShoppingCart = () => {

    const cartProducts = useSelector((state: RootState) => state.cart.products)
    return (
        <div>
            {cartProducts.length === 0 ? (<p>Корзина пуста</p>) : (
                <ul>
                    {cartProducts.map((product) => (
                        <li>
                            <img src={product.imageUrl} alt="" />
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                        </li>

                    ))}
                </ul>
            )}
        </div>
    )


}

export default ShoppingCart