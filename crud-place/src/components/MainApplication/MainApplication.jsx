import React, { useState } from 'react'
import Navbar from './Navbar/Navbar'
import styled from 'styled-components'
import Actions from './Actions/Actions'

const MainApplication = () => {
    
    const [actionMainApplication, setActionMainApplication] = useState(false)
    
    const MainApplication = styled.div`
    
        display: flex;
        justify-content: center;

        padding: 2vh 0px 0px 0px;
    `

    return (
        
        <MainApplication>
            <Navbar
                action={actionMainApplication}
                setAction={setActionMainApplication}
            />
            <Actions action={actionMainApplication}/>
        </MainApplication>
    )
}

export default MainApplication
