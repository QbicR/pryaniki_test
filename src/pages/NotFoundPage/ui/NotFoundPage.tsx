import Button from '@mui/material/Button'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <Button
                onClick={() => navigate('/login')}
                variant={'contained'}
                color={'success'}
                children={'home'}
            />
        </div>
    )
}

export default NotFoundPage
