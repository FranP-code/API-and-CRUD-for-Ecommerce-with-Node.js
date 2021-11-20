import React from 'react'
import styled from 'styled-components'

const SubHeader = (props) => {

    const Header = styled.header`

        background-color: ${props.color};
        
        display: flex;
        justify-content: space-between;
        align-items: center;

        flex-direction: initial;

        color: #fff;

        user-select: none;

        padding: 2vh 3vw 2vh 3vw;

        a, button {

            background: none;
            color: #fff;

            border: #fff solid 2px;
            border-radius: 10px;

            margin: 0px;

            &:hover {

                background-color: #0005;
            }
        }
        
    `

    return (
        <Header>
            <h2>{props.text}</h2>
            {props.additionalChildren ? props.additionalChildren : null}
        </Header>
    )
}

export default SubHeader
