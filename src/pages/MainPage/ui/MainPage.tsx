import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

const MainPage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <Button
                onClick={() => navigate(RoutePath.login)}
                variant={'contained'}
                color={'success'}
                children={'login'}
            />
            <Button
                onClick={() => navigate('/1213')}
                variant={'contained'}
                color={'warning'}
                children={'404'}
            />
        </div>
    )
}

export default MainPage
