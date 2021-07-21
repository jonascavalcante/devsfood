import React from 'react';
import { Container, ProductArea, ProductButtons, ProductDetails, ProductInfoArea, ProductPhoto, ProductQuantityArea } from './styled';

const ModalProduct = () => {

    return (
        <Container>

            <ProductArea>

                <ProductPhoto src="" />

                <ProductInfoArea>

                    <ProductDetails>
                        DDD
                    </ProductDetails>

                    <ProductQuantityArea>
                        QQQ
                    </ProductQuantityArea>

                </ProductInfoArea>

            </ProductArea>

            <ProductButtons>
                BBB
            </ProductButtons>

        </Container>
    );
}

export default ModalProduct;