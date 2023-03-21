import React, { memo } from 'react'

import { Button } from '@mui/material'

interface Props {
    onClick: () => void
    size: 'small' | 'medium' | 'large'
    variant: 'text' | 'outlined' | 'contained'
    color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
    content: string
    disabled?: boolean
    sx?: object
}

export const ButtonUI: React.FC<Props> = memo((props) => {
    const { disabled, onClick, size, variant, color, content, sx } = props
    return (
        <Button
            sx={sx}
            disabled={disabled}
            onClick={onClick}
            size={size}
            variant={variant}
            color={color}
        >
            {content}
        </Button>
    )
})
