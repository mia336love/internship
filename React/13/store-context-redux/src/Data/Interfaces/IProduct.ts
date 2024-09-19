import Genres from "../Enum/Genres";

interface IProduct {
    id: number;
    name: string;
    artist?: string;
    genres: Genres[];
    year: number;
    price: number;
    imageUrl: string;
}

export default IProduct;
