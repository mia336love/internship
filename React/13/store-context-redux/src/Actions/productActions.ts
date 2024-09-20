import { Dispatch } from "redux";
import ArrProducts from "../Data/ArrProducts";
import IProduct from "../Data/Interfaces/IProduct";

interface SetProductsAction {
    type: 'SET_PRODUCTS';
    products: IProduct[];
}

export const fetchProducts = () => {
    return (dispatch: Dispatch<SetProductsAction>) => {
        setTimeout(() => {
            dispatch({
                type: 'SET_PRODUCTS',
                products: ArrProducts,
            });
        }, 2000);
    };
};

export default fetchProducts