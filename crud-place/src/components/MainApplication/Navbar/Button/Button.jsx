import React from 'react'
import styled from 'styled-components'

const Button = (props) => {

    const Color = require('color')
    const buttonColor = Color(props.color)
    
    const borderColor = buttonColor.saturate(0.5)
    const activeColor = buttonColor.darken(0.3)
    const hoverColor = buttonColor.darken(0.35)

    const Button = styled.button`

        width: 12vw;
        height: 6vh;

        background-color: ${buttonColor};
        color: #242424;
        
        transition: 0.4s ease-in-out;

        border: none;
        border: ${borderColor} 1px solid;
        border-radius: 5px;
        
        cursor: pointer;

        &.active {

            background-color: ${activeColor};

            transition: 0.4s ease-in-out;
        }

        &:hover {
        
            background-color: ${hoverColor};

            transition: 0.4s ease-in-out;
        }
    `
    return (
        <Button
            className={props.action === props.text.toLowerCase() ? 'active' : null}

            onClick={() => {
                props.setAction( props.text.toLowerCase() )
        }}>
            {props.text.toUpperCase()}
        </Button>
    )
}

export default Button
