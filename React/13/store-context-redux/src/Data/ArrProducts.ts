import IProduct from "./Interfaces/IProduct"

import Genres from "./Enum/Genres"

const ArrProducts: IProduct[] = [
    {
        id: 1,
        name: "Kill Bill Vol. 2 Original Soundtrack",
        artist: "",
        genres: [Genres.Rock],
        year: 2004,
        price: 3100,
        imageUrl: "https://i.scdn.co/image/ab67616d0000b2739adff911989f44527bdfb7ee"
    },
    {
        id: 2,
        name: "Parklife",
        artist: "Blur",
        year: 1994,
        genres: [Genres.Britpop],
        price: 5060,
        imageUrl: "https://i.scdn.co/image/ab67616d0000b27315b972e00b09918388d0b58f"
    },
    {
        id: 3,
        name: "Leisure",
        artist: "Blur",
        genres: [Genres.Britpop],
        year: 1991,
        price: 4100,
        imageUrl: "https://i.scdn.co/image/ab67616d0000b27371a1e5b730a3273212ce9aac"
    },
    {
        id: 4,
        name: "13",
        artist: "Blur",
        genres: [Genres.ArtRock, Genres.AlternativeRock],
        year: 1998,
        price: 6237,
        imageUrl: "https://i.scdn.co/image/ab67616d0000b27394983882a5effd77742a9f52"
    },
    {
        id: 5,
        name: "Trainspotting: Music from the Motion Picture",
        genres: [Genres.Britpop, Genres.AlternativeRock],
        year: 1996,
        price: 5810,
        imageUrl: "https://i.scdn.co/image/ab67616d0000b273bf50b90a3fd68234481ecf6b"
    },
    {
        id: 6,
        name: "Once Upon A Time In Hollywood (Original Motion Picture Soundtrack)",
        genres: [Genres.Rock, Genres.Pop],
        year: 2019,
        price: 4200,
        imageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/38/70/65/3870656a-959f-522a-39b9-2309362adc98/886447785546.jpg/1200x1200bb.jpg"
    },
    {
        id: 7,
        name: "A Night At The Opera",
        genres: [Genres.ProgressiveRock, Genres.Pop],
        year: 1975,
        price: 6100,
        imageUrl: "https://i.scdn.co/image/ab67616d0000b2737110a2b3dc32dc1224b7670f"
    },
]

export default ArrProducts