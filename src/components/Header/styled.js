import styled from 'styled-components';

const Container = styled.div`
    padding: 20px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-radius: 10px;
    background-color: #136712;
`;

const Logo = styled.img`
    width: auto;
    height: 70px;
`;

const SearchInput = styled.input`
    width: ${props => props.active ? 300 : 0 }px;
    height: 50px;
    padding-left: 50px;

    font-size: 15px;
    border-radius: 25px;
    border: none;
    outline: transparent;

    background-color: #fff;
    background-image: url('./assets/search.png');
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: 10px center;

    transition: all ease 0.2s;

    cursor: pointer;
    &:focus {
        cursor: text;
    }
`;

export { Container, Logo, SearchInput };