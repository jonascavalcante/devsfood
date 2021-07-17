import React from 'react';
import { Container, Logo, SearchInput } from './styled';

const Header = () => {

    return (
        <Container>
            <Logo src="./assets/logo.png" />
            <SearchInput 
                type="text" 
                placeholder="Pesquise aqui..."
            />
        </Container>
    );
}

export default Header;