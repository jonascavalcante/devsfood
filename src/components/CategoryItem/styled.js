import styled from 'styled-components';

const Container = styled.div`
    width: 80px;
    height: 80px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    border-radius: 20px;
    background-color: ${props => props.active === props.id ? '#FEFFFF' : '#ABE09A' };

    &:hover {
        background-color: #FEFFFF;
    }
`;

const CategoryImage = styled.img`
    width: 52px;
    height: 52px;
`;

export { Container, CategoryImage };