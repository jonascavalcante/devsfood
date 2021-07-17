import React, { useState } from 'react';

import { Container } from './styled';

import Header from '../../components/Header';

export default () => {

    const [headerSearch, setHeaderSearch] = useState('');

    return (
        <Container>
            <Header 
                search={headerSearch} 
                onSearch={setHeaderSearch}    
            />
        </Container>
    );
}