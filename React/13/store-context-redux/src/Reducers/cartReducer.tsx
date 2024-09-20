import IProduct from "../Data/Interfaces/IProduct"

type SelectedProductsState = {
    products: IProduct[]
}

// type CartAction = {
//     type: "ADD" | "REMOVE";
//     product: IProduct;
// };

type CartAction =
    | { type: 'ADD'; product: IProduct }
    | { type: 'REMOVE'; productId: number }

const InitialState: SelectedProductsState = {
    products: []
}

function cartReducer(state = InitialState, action: CartAction): SelectedProductsState {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                products: [...state.products, action.product]
            };
        case "REMOVE":
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.productId)
            };
    }
}

export default cartReducer