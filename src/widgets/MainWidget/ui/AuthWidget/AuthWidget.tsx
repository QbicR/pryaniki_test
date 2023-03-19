import { Card, Typography } from '@mui/material'

import { UserAuth } from 'features/UserAuth'

const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '50px',
    textAlign: 'center',
    width: 500,
    height: 300,
    p: 4,
}

export const AuthWidget = () => {
    return (
        <Card sx={cardStyle}>
            <Typography sx={{ fontSize: 32 }} color="text.secondary" gutterBottom>
                Авторизуйтесь, чтобы воспользоваться таблицей
            </Typography>
            <UserAuth />
        </Card>
    )
}
