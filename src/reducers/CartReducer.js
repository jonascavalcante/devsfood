const initialState = {
    products: [],
    address: [],
    discount: 0,
    delivery: 0
};

export default (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'ADD_PRODUCT':
            let products = [...state.products];
            let id = action.payload.data.id;

            let index = products.findIndex(item => item.id === id);
            if (index > -1) {
                products[index].qt += action.payload.qt;
            } else {
                products.push({
                    ...action.payload.data,
                    qt: action.payload.qt
                })
            }

            console.log(products);

            return { ...state, products }

        /* case 'SET_TOKEN':
            return { ...state, token: action.payload.token };
        case 'SET_NAME':
            return { ...state, name: action.payload.name }; */
    }

    return state;
}