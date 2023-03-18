import React from 'react'
import { Container } from '@mui/material'

import { TableData } from 'features/TableData/ui/Table/TableData'

const MainPage = () => {
    return (
        <Container
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                width: '100%',
            }}
        >
            <TableData />
        </Container>
    )
}

export default MainPage
