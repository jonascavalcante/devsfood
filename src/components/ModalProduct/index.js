import React from 'react';
import { Container, ProductArea, ProductButton, ProductButtons, ProductDetails, ProductInfoArea, ProductIngredients, ProductName, ProductPhoto, ProductPrice, ProductQtImage, ProductQtText, ProductQuantity, ProductQuantityArea } from './styled';

const ModalProduct = ({ data }) => {

    return (
        <Container>

            <ProductArea>

                <ProductPhoto src={data.image} />

                <ProductInfoArea>

                    <ProductDetails>
                        <ProductName>{data.name}</ProductName>
                        <ProductIngredients>{data.ingredients}</ProductIngredients>
                    </ProductDetails>

                    <ProductQuantityArea>
                     
                        <ProductQuantity>
                            <ProductQtImage src="/assets/minus.png" />
                            <ProductQtText>9</ProductQtText>
                            <ProductQtImage src="/assets/plus.png" />
                        </ProductQuantity>
                    
                        <ProductPrice>
                            R$ {data.price}
                        </ProductPrice>

                    </ProductQuantityArea>

                </ProductInfoArea>

            </ProductArea>

            <ProductButtons>
                <ProductButton small={true}>Cancelar</ProductButton>
                <ProductButton>Adicionar ao carrinho</ProductButton>
            </ProductButtons>

        </Container>
    );
}

export default ModalProduct;