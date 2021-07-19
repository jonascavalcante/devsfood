import styled from 'styled-components';

const Container = styled.div`
    padding: 10px;

    display: flex;
    align-items: center;
    gap: 10px;
    
    border-radius: 5px;
    color: #136712;
    background-color: #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    cursor: pointer;
`;

const ProductPhotoArea = styled.div`
    width: 100px;
`;

const ProductPhoto = styled.img`
    width: 100%;

`;

const ProductInfoArea = styled.div`
    flex: 1;
`;

const ProductName = styled.div`
    font-weight: bold;
    font-size: 20px;
`;

const ProductPrice = styled.div`
    font-size: 14px;
    `;

const ProductIngredients = styled.div`
    font-size: 11px;
`;

const ProductButtonArea = styled.div`

`;

const ProductButton = styled.img`
    width: 15px;
`;

export { Container, ProductPhotoArea, ProductPhoto, ProductInfoArea, ProductName, ProductPrice, ProductIngredients, ProductButtonArea, ProductButton };