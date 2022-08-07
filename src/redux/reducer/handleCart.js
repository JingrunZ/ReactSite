const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    console.log(state);
    switch (action.type) {
        case "ADDITEM":
            return [
                ...state,
                {
                    ...product
                }
            ]

        case "DELITEM":
            return state.filter((x) => x.id !== product.id)

        case "MINITEM":
            const index = state.findIndex(item => item.id === product.id);
            return state.filter((_, i) => i !== index);

        default:
            return state;
    }
}

export default handleCart;