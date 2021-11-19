import React from 'react'
import styled from 'styled-components'

const Header = (props) => {

    console.log(props);
    
    const Header = styled.header`

        background-color: ${props.color};
        
        display: flex;
        justify-content: center;
        align-items: center;

        flex-direction: column;

        color: #fff;

        user-select: none;

        h1 {

            margin: 2vh 0px 1vh 0px;
        }
    `

    return (
        <Header>
            <h1>{props.text}</h1>
            {props.additionalChildren ? props.additionalChildren : null}
        </Header>
    )
}

export default Header
