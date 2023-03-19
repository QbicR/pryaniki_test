import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { Button } from '@mui/material'

import { addTableItem } from '../../model/slice/tableSlice'
import TableForm from '../TableForm/TableForm'
import { ResponseDataType } from '../../model/types/dataType'
import ModalUI from 'shared/ui/Modal/ModalUI'

const AddItemForm = () => {
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
}

export default AddItemForm
