interface ProductType {
    id: number,
    category: string,
    description: string,
    image: string,
    title: string,
    price: number,
    rating: {
        count: number;
        rate: number;
    }
}


export type { ProductType }