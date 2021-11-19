import React from 'react'
import styled, {css} from 'styled-components'

const Button = (props) => {

    const LinkStyle = styled.a`

        height: 6vh;
        width: 15vw;

        padding: 1vh 1vw 1vh 1vw;
        margin: 0px 0px 1vh 0px;

        border: none;
        border-radius: 5px;

        background-color: ${props.color};
        transition: 0.4s ease-in-out;

        color: #000;
        font-weight: bold;
        text-decoration: none;
        
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            
            transition: 0.4s ease-in-out;
            background-color: ${props.hoverColor};
        }
    `

    return (
        <>
            {
                props.link ?
                    <LinkStyle href={props.link}>
                        {props.text}
                    </LinkStyle>
                : null
            }
        </>
    )
}

export default (Button)