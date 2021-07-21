import React from 'react';
import { Container, ProductArea, ProductButtons, ProductDetails, ProductInfoArea, ProductPhoto, ProductQuantityArea } from './styled';

const ModalProduct = ({ data }) => {

    return (
        <Container>

            <ProductArea>

                <ProductPhoto src={data.image} />

                <ProductInfoArea>

                    <ProductDetails>
                        {data.name}
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