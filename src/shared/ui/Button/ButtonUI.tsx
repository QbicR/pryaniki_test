import React, { memo } from 'react'

import { Button } from '@mui/material'

interface Props {
    disabled: boolean
    onClick: () => void
    size: 'small' | 'medium' | 'large'
    variant: 'text' | 'outlined' | 'contained'
    color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
    content: string
}

export const ButtonUI: React.FC<Props> = memo((props) => {
    const { disabled, onClick, size, variant, color, content } = props
    return (
        <Button disabled={disabled} onClick={onClick} size={size} variant={variant} color={color}>
            {content}
        </Button>
    )
})
