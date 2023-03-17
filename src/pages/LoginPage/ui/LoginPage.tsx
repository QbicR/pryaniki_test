import Button from '@mui/material/Button'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <Button onClick={() => navigate('/')} variant={'contained'} color={'secondary'}>
                home
            </Button>
            <Button onClick={() => navigate('/loginnn')} variant={'contained'} color={'warning'}>
                404
            </Button>
        </div>
    )
}

export default LoginPage
