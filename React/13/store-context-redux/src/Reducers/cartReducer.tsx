import IProduct from "../Data/Interfaces/IProduct"

export type SelectedProductsState = {
    products: IProduct[]
}

// type CartAction = {
//     type: "ADD" | "REMOVE";
//     product: IProduct;
// };

export type CartAction =
    | { type: 'ADD'; product: IProduct }
    | { type: 'REMOVE'; productId: number }

const InitialState: SelectedProductsState = {
    products: []
}

function cartReducer(state = InitialState, action: CartAction): SelectedProductsState {
    switch (action.type) {
        case 'ADD':
            console.log('added into cart');
            console.log(state);

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

export default cartReducer