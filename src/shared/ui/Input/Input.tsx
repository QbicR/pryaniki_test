import { TextField } from '@mui/material'
import React, { memo } from 'react'

interface Props {
    value: string
    label: string
    variant: 'standard' | 'filled' | 'outlined'
    onChange: (value: string) => void
    error?: boolean
    required?: boolean
}

const inputStyle = { width: '100%', marginBottom: '20px' }

export const Input: React.FC<Props> = memo((props) => {
    const { value, label, variant, onChange, error, required } = props
    return (
        <TextField
            required={required}
            sx={inputStyle}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            type="text"
            variant={variant}
            id={'filled-size-small'}
            label={label}
            error={error}
        />
    )
})
