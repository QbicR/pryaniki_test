import { memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { Button } from '@mui/material'

import { addTableItem } from '../../model/slice/tableSlice'
import { ResponseDataType } from '../../model/types/dataType'
import { ModalUI } from 'shared/ui/Modal/ModalUI'
import { TableForm } from '../TableForm/TableForm'

export const AddItemForm = memo(() => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const dispath = useDispatch<ThunkDispatch<any, any, any>>()

    const addItem = (newItem: ResponseDataType) => {
        dispath(addTableItem(newItem))
        setIsModalOpen(false)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <div>
            <Button
                size="large"
                variant="contained"
                color="info"
                onClick={() => setIsModalOpen(true)}
            >
                Добавить запись
            </Button>
            <ModalUI isOpen={isModalOpen} onClose={closeModal}>
                <TableForm addItem={addItem} />
            </ModalUI>
        </div>
    )
})
