import React, { memo, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import { IconButton } from '@mui/material'

import { changeTableItem } from '../../model/slice/tableSlice'
import { ResponseDataType } from '../../model/types/dataType'
import { ModalUI } from 'shared/ui/Modal/ModalUI'
import { TableForm } from '../TableForm/TableForm'

interface Props {
    item: ResponseDataType
}

export const ChangeItemForm: React.FC<Props> = memo((props) => {
    const { item } = props

    const [isModalOpen, setIsModalOpen] = useState(false)
    const dispath = useDispatch<ThunkDispatch<any, any, any>>()

    const changeItem = useCallback(
        (id: string, newItem: ResponseDataType) => {
            dispath(changeTableItem(id, newItem))
            setIsModalOpen(false)
        },
        [dispath],
    )

    const closeModal = useCallback(() => {
        setIsModalOpen(false)
    }, [])

    return (
        <div>
            <IconButton aria-label="delete" onClick={() => setIsModalOpen(true)}>
                <ModeEditIcon sx={{ color: '#47A76A' }} />
            </IconButton>
            <ModalUI isOpen={isModalOpen} onClose={closeModal}>
                <TableForm changeItem={changeItem} item={item} />
            </ModalUI>
        </div>
    )
})
