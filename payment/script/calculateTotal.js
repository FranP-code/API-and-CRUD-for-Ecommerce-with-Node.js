const calculateTotal = (totalPrice) => {

    const totalElement = document.querySelector(".column.second-column h3 span")

    console.log(totalElement)
    totalElement.innerText = totalPrice

}

export default calculateTotal
