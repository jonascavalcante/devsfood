import React, { useState, useEffect } from 'react';
import { Container, ProductArea, ProductButton, ProductButtons, ProductDetails, ProductInfoArea, ProductIngredients, ProductName, ProductPhoto, ProductPrice, ProductQtImage, ProductQtText, ProductQuantity, ProductQuantityArea } from './styled';

const ModalProduct = ({ data, setStatus }) => {

    const [qt, setQt] = useState(1);

    useEffect(() => {
        setQt(1);
    }, [data])

    const handleMinusQt = () => {
        if (qt > 1) {
            setQt((prevState) => (
                prevState - 1
            ));
        }
    }

    const handlePlusQt = () => {
        setQt((prevState) => (
            prevState + 1
        ));
    }

    const handleCancelButton = () => {
        setStatus(false);
    }

    const handleAddToCart = () => {
        
        setStatus(false);
    }

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
                            <ProductQtImage
                                src="/assets/minus.png"
                                onClick={handleMinusQt}
                            />
                            <ProductQtText>{qt}</ProductQtText>
                            <ProductQtImage
                                src="/assets/plus.png"
                                onClick={handlePlusQt}
                            />
                        </ProductQuantity>

                        <ProductPrice>
                            R$ {(data.price * qt).toFixed(2)}
                        </ProductPrice>

                    </ProductQuantityArea>

                </ProductInfoArea>

            </ProductArea>

            <ProductButtons>

                <ProductButton
                    small={true}
                    onClick={handleCancelButton}
                >
                    Cancelar
                </ProductButton>

                <ProductButton
                    onClick={handleAddToCart}
                >
                    Adicionar ao carrinho
                </ProductButton>

            </ProductButtons>

        </Container>
    );
}

export default ModalProduct;