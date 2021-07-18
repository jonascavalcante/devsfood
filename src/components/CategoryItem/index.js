import React from 'react';

import { Container, CategoryImage } from './styled';

const CategoryItem = ({data, activeCategory}) => {

    return (
        <Container
            active={activeCategory}
            id={data.id}    
        >
            <CategoryImage src={data.image} />
        </Container>
    );
}

export default CategoryItem;