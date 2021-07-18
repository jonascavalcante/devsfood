import React from 'react';

import { Container, CategoryImage } from './styled';

const CategoryItem = ({ data, activeCategory, setActiveCategory }) => {

    const handleCategoryClick = () => {
        setActiveCategory(data.id);
    }

    return (
        <Container
            active={activeCategory}
            id={data.id}
            onClick={handleCategoryClick}
        >
            <CategoryImage src={data.image} />
        </Container>
    );
}

export default CategoryItem;