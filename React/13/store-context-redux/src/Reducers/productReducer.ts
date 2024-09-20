import IProduct from "../Data/Interfaces/IProduct";

export type ProductAction =
    | { type: 'SET_PRODUCTS'; products: IProduct[] };

export type ProductsState = {
    products: IProduct[];
};

const initialState: ProductsState = {
    products: [],
};

function productReducer(state = initialState, action: ProductAction): ProductsState {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.products,
            };
        default:
            return state;
    }
}

export default productReducer;
