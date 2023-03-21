import React, { memo, useCallback } from 'react'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

import { deleteTableItem } from '../../model/slice/tableSlice'

interface Props {
    id: string
}

export const DeleteItem: React.FC<Props> = memo((props) => {
    const { id } = props
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

    const deleteItem = useCallback(
        (id: string) => {
            dispatch(deleteTableItem(id))
        },
        [dispatch],
    )

    return (
        <IconButton onClick={() => deleteItem(id)} aria-label="delete">
            <DeleteIcon sx={{ color: '#E34234' }} />
        </IconButton>
    )
})
