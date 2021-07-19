import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
    display: flex;
    background-color: #03AE2A;
`;

const Menu = styled.div`
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    background-color: #136712;
`;

const PageBody = styled.div`
    display: flex;
    flex: 1;
    background-color: #00990D;
    background-image: url('./assets/bg.png');
    overflow-y: auto;
`;

export { Container, Menu, PageBody };