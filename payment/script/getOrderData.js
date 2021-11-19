const getOrderData = () => {
    
    const data = JSON.parse(sessionStorage.getItem('order'))
    
    return data
}

export default getOrderData
