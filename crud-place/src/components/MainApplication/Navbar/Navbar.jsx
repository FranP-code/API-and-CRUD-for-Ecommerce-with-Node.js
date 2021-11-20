import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import Button from './Button/Button'

const Navbar = (props) => {

    const Navbar = styled.nav`
    
        width: 75vw;

        display: flex;
        justify-content: space-around;

    `
    return (
        <Navbar>
            <Button
                action={props.action}
                setAction={props.setAction}

                color={'rgb(200, 92, 92)'}
                text={'Create'}
            />
            
            <Button
                action={props.action}
                setAction={props.setAction}

                color={'rgb(249, 151, 93)'}
                text={'read'}
            />

            <Button
                action={props.action}
                setAction={props.setAction}

                color={'rgb(251, 209, 72)'}
                text={'update'}
            />

            <Button
                action={props.action}
                setAction={props.setAction}

                color={'rgb(178, 234, 112)'}
                text={'DeLeTe'}
            />
        </Navbar>
    )
}

export default Navbar
