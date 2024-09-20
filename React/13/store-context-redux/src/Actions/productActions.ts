import { Dispatch } from "redux";
import ArrProducts from "../Data/ArrProducts";

const fetchProducts = () => {
    return (dispatch: Dispatch) => {
        setTimeout(() => {
            // имитация получения данных с сервера
            dispatch({
                type: 'SET_PRODUCTS',
                products: ArrProducts,
            });
        }, 2000);
    };
};

export default fetchProducts