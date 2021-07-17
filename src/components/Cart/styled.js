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

`;

const CartIcon = styled.img`
    width: 23px;
    height: auto;
    margin: 0 10px;
`;

const CartText = styled.div`
    font-size: 17px;
    color: #fff;
`;

export { CartArea, CartHeader, CartBody, CartIcon, CartText };