import React from 'react'
import Create from './Create/Create'
import styled from 'styled-components'
import Read from './Read/Read'
import Update from './Update/Update'
import Delete from './Delete/Delete'

const Actions = (props) => {

    const action = props.action

    const GlobalActionsStyles = styled.div`

        input[type="text"] {

        }

        select {


        }
    `

    return (
        <GlobalActionsStyles>
            {
                action === 'create' ?
                    <Create />
                : null
            }
            {
                action === 'read' ?
                    <Read />
                : null
            }
            {
                action === 'update' ?
                    <Update />
                : null
            }
            {
                action === 'Delete' ?
                    <Delete />
                : null
            }
        </GlobalActionsStyles>
    )
}

export default Actions
