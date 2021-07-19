import React, { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';

import { Container, CategoryArea, CategoryList } from './styled';

import api from '../../api';

import Header from '../../components/Header';
import CategoryItem from '../../components/CategoryItem';

export default () => {

    const [headerSearch, setHeaderSearch] = useState('');
    const [categories, setCategories] = useState([]);

    const [activeCategory, setActiveCategory] = useState(0);

    useEffect(() => {
        (async () => {
            const cat = await api.getCategories();
            if (cat.error === '') {
                setCategories(cat.result);
            }

            ReactTooltip.rebuild();
        })();
    }, []);

    return (
        <Container>

            <Header
                search={headerSearch}
                onSearch={setHeaderSearch}
            />

            {categories.length > 0 &&
                <CategoryArea>

                    Selecione uma categoria
                    <CategoryList>

                        <CategoryItem
                            data={{
                                id: 0,
                                name: 'Todas as categorias',
                                image: '/assets/food-and-restaurant.png'
                            }}
                            activeCategory={activeCategory}
                            setActiveCategory={setActiveCategory}
                        />

                        {categories.map((item, index) => (
                            <CategoryItem
                                key={index}
                                data={item}
                                activeCategory={activeCategory}
                                setActiveCategory={setActiveCategory}
                            />
                        ))}

                    </CategoryList>

                </CategoryArea>
            }

        </Container>
    );
}