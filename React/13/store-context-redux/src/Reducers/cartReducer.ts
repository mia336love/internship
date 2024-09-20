import IProduct from "../Data/Interfaces/IProduct";
import { Dispatch } from "redux";

export type SelectedProductsState = {
    products: IProduct[];
};

export type CartAction =
    | { type: 'ADD'; product: IProduct }
    | { type: 'REMOVE'; productId: number };

const InitialState: SelectedProductsState = {
    products: []
};

function cartReducer(state = InitialState, action: CartAction): SelectedProductsState {
    switch (action.type) {
        case 'ADD':
            console.log('added into cart');
            return {
                ...state,
                products: [...state.products, action.product]
            };
        case "REMOVE":
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.productId)
            };
        default:
            return state;
    }
}

export default cartReducer;

export const addProductToCart = (product: IProduct) => {
    return (dispatch: Dispatch) => {
        setTimeout(() => {
            dispatch({ type: 'ADD', product });
        }, 2000);
    };
};

export const removeProductFromCart = (productId: number) => {
    return (dispatch: Dispatch) => {
        setTimeout(() => {
            dispatch({ type: 'REMOVE', productId });
        }, 2000);
    };
};
