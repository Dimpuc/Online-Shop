
export interface CartInterface {
    date: Date,
    id: number,
    products: {
      productId: number,
      quantity: number
    }[]
  }

export interface UserCartInterface extends Omit<CartInterface, "products"> {
    products: (ProductType & { quantity: number })[];
}

export interface CreateCartInterface extends CartInterface {
    allProducts: ProductType[]
}


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