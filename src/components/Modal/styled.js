import styled from 'styled-components';

const Container = styled.div`
    display: ${props => props.status ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 900;
`;

const ModalBody = styled.div`
    max-width: 100%;
    max-height: 95vh;

    border-radius: 20px;
    box-shadow: 0 0 50px #000;

    background-color: #fff;
    overflow: auto;
`;

export { Container, ModalBody };