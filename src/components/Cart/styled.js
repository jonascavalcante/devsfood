import styled from 'styled-components';

const CartArea = styled.div`
    position: fixed;
    bottom: 0;
    right: 30px;

    border-radius: 10px 10px 0 0;
    background-color: #136712;
`;

const CartHeader = styled.div`
    width: 290px;
    height: 50px;

    display: flex;
    align-items: center;

    cursor: pointer;
`;

const CartBody = styled.div`
    display: ${props => props.show ? 'block' : 'none'};
    color: #fff;
`;

const CartIcon = styled.img`
    width: 23px;
    height: auto;
    margin: 0 10px;
`;

const CartText = styled.div`
    flex: 1;
    font-size: 17px;
    color: #fff;
`;

const ProductsArea = styled.div`

`;

const ProductItem = styled.div`
    margin: 10px;
    display: flex;
    gap: 10px;
`;

const ProductPhoto = styled.img`
    width: 64px;
    height: auto;
    border-radius: 10px;
`;

const ProductInfoArea = styled.div`
    flex: 1;
`;

const ProductName = styled.div`
    font-size: 15px;
    font-weight: bold;
`;

const ProductPrice = styled.div`
    font-size: 13px;
`;

const ProductQuantityArea = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

const ProductQtIcon = styled.img`
    width: 13px;
    height: auto;
    cursor: pointer;
`;

const ProductQtText = styled.div`
    font-size: 13px;
    font-weight: bold;
`;

export { CartArea, CartHeader, CartBody, CartIcon, CartText, ProductsArea, ProductItem, ProductPhoto, ProductInfoArea, ProductName, ProductPrice, ProductQuantityArea, ProductQtIcon, ProductQtText };