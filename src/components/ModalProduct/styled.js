import styled from 'styled-components';

const Container = styled.div`
    width: 740px;
    padding: 10px;
`;

const ProductArea = styled.div`
    height: 200px;

    display: flex;
`;

const ProductPhoto = styled.img`
    width: 310px;
`;

const ProductInfoArea = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

const ProductDetails = styled.div`
    height: 50px;

    background-color: #ff0000;
`;

const ProductQuantityArea = styled.div`
    height: 50px;

    background-color: #0000ff;
`;

const ProductButtons = styled.div`
    height: 50px;

    background-color: #00ff00;
`;

export { Container, ProductArea, ProductPhoto, ProductInfoArea, ProductDetails, ProductQuantityArea, ProductButtons };