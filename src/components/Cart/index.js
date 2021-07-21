import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { CartArea, CartBody, CartHeader, CartIcon, CartText, ProductInfoArea, ProductItem, ProductName, ProductPhoto, ProductPrice, ProductQtIcon, ProductQtText, ProductQuantityArea, ProductsArea } from './styled';

const Cart = () => {

    const products = useSelector(state => state.cart.products);

    const [show, setShow] = useState(true);

    const handleCartClick = () => {
        setShow(!show);
    }

    return (
        <CartArea>

            <CartHeader onClick={handleCartClick}>
                <CartIcon src="/assets/cart.png" />
                <CartText>Meu carrinho ({products.length})</CartText>
                {show &&
                    <CartIcon src="/assets/down.png" />
                }
            </CartHeader>

            <CartBody show={show}>
                <ProductsArea>
                    {products.map((item, index) => (
                        <ProductItem key={index}>

                            <ProductPhoto src={item.image} />

                            <ProductInfoArea>
                                <ProductName>{item.name}</ProductName>
                                <ProductPrice>R$ {item.price.toFixed(2)}</ProductPrice>
                            </ProductInfoArea>

                            <ProductQuantityArea>

                                <ProductQtIcon
                                    src="/assets/minus.png"
                                />

                                <ProductQtText>{item.qt}</ProductQtText>

                                <ProductQtIcon
                                    src="/assets/plus.png"
                                />

                            </ProductQuantityArea>

                        </ProductItem>
                    ))}
                </ProductsArea>
            </CartBody>

        </CartArea>
    );
}

export default Cart;