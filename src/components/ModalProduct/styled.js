import styled from 'styled-components';

const Container = styled.div`
    width: 740px;
    padding: 20px;
`;

const ProductArea = styled.div`
    height: 200px;

    display: flex;
`;

const ProductPhoto = styled.img`
    width: 310px;
    border-radius: 10px;
`;

const ProductInfoArea = styled.div`
    margin-left: 10px;
    flex: 1;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

const ProductDetails = styled.div`
    
`;

const ProductName = styled.div`
    font-size: 30px;
    font-weight: bold;
    `;

const ProductIngredients = styled.div`
    font-size: 14px;
`;

const ProductQuantityArea = styled.div`
    height: 50px;

    display: flex;
    justify-content: space-between;
`;

const ProductQuantity = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const ProductQtImage = styled.img`
    width: 16px;
    height: auto;
    padding: 8px;
    background-color: #073C06;
    border-radius: 5px;
`;

const ProductQtText = styled.div`
    font-size: 25px;
    font-weight: bold;
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: bold;
`;

const ProductButtons = styled.div`
    padding-top: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
`;

const ProductButton = styled.button`
    padding: ${props => props.small ? '5px 10px' : '10px 20px'};
    font-size: ${props => props.small ? 13 : 22}px;
    font-weight: bold;

    border: none;
    border-radius: 5px;

    color: #fff;
    background-color: #073C06;
    box-shadow: 4px 5px 0 rgba(0, 0, 0, 0.16);
`;

export { Container, ProductArea, ProductPhoto, ProductInfoArea, ProductDetails, ProductName, ProductIngredients, ProductQuantityArea, ProductQuantity, ProductQtImage, ProductQtText, ProductPrice, ProductButtons, ProductButton };