import { useState } from 'react';
import { Product } from '../models/Product';

const useCart = (proizvodiUKorpi: Product[]) => {
  const [cartNum, setCartNum] = useState<number>(0);
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  const addToCart = (id: number) => {
    const product = proizvodiUKorpi.find(prod => prod.id === id);
    if (product) {
      setCartProducts(prevCart => {
        const existingProduct = prevCart.find(p => p.id === product.id);
        if (existingProduct) {
          return prevCart.map(p => 
            p.id === product.id ? { ...p, kolicina: p.kolicina + 1 } : p
          );
        } else {
          return [...prevCart, { ...product, kolicina: 1 }];
        }
      });
      setCartNum(cartNum + 1);
    }
  };

  const deleteFromCart = (id: number) => {
    setCartProducts(prevCart => {
      const existingProduct = prevCart.find(p => p.id === id);
      if (existingProduct && existingProduct.kolicina > 1) {
        return prevCart.map(p => 
          p.id === id ? { ...p, kolicina: p.kolicina - 1 } : p
        );
      } else {
        return prevCart.filter(p => p.id !== id);
      }
    });
    if (cartProducts.some(product => product.id === id)) {
        setCartNum(prevNum => prevNum - 1);
    }
  };

  return { cartNum, cartProducts,addToCart, deleteFromCart};
};

export default useCart;

