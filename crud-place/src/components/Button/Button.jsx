import React from 'react'

const Button = ({text, action}, props) => {

    console.log(action);
    return (
        <button
            onClick={
                () => window.location = '../'
            }
        >
            {text}
        </button>
    )
}

export default (Button)