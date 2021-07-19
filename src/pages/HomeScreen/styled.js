import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    padding: 15px;
`;

const CategoryArea = styled.div`
    margin-top: 20px;
    color: #fff;
`;

const CategoryList = styled.div`
    margin-top: 10px;
    display: flex;
    gap: 10px;
`;

const ProductArea = styled.div`
    margin: 20px 0 10px 0;
`;

const ProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
`;

const ProductPaginationArea = styled.div`
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

const ProductPaginationItem = styled.div`
    padding: 5px 10px;
    border-radius: 5px;
    background-color: ${props => props.active === props.current ? '#fff' : '#ABE09A' };
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    cursor: pointer;
`;

export { Container, CategoryArea, CategoryList, ProductArea, ProductList, ProductPaginationArea, ProductPaginationItem };