import { useState } from 'react'
import { UserCartInterface } from '../../types/products.type';
import { useProduct } from '../../providers/ProductsProvider';
import { createCart } from '../requset-service/actions';

const useCreateCart = () => {
    const [userCart, setUserCart] = useState<UserCartInterface | null>(null);
    const { products } = useProduct();

    const createCartRequset = ({ id, pid }: { id: number; pid: number }) => {
        const body = {
            id, // user.id
            date: new Date(),
            products: [
                {
                    productId: Number(pid),
                    quantity: 1,
                },
            ],
            allProducts: products,
        };

        createCart(body).then((res) => {
            if (res) {
                setUserCart(res);
            }
        });
    };


    return { userCart, createCartRequset }
}

export { useCreateCart }
