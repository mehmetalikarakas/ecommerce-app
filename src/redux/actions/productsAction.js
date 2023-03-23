

export const productsAction = () => async (dispatch) => {
    const data = await fetch('https://api.storerestapi.com/products/running-sneaker')
    .then(res=>res.json())

    dispatch({type: 'GET_PRODUCTS',payload: data})
}