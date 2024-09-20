    import { SelectedProductsState } from "./cartReducer";
    import { ProductsState } from "./productReducer";
    export interface RootState {
        cart: SelectedProductsState;
        products: ProductsState;
    }
