import { memo, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'

import { addTableItem } from '../../model/slice/tableSlice'
import { ResponseDataType } from '../../model/types/dataType'
import { ModalUI } from 'shared/ui/Modal/ModalUI'
import { TableForm } from '../TableForm/TableForm'
import { ButtonUI } from 'shared/ui/Button/ButtonUI'

export const AddItemForm = memo(() => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const dispath = useDispatch<ThunkDispatch<any, any, any>>()

    const addItem = useCallback(
        (newItem: ResponseDataType) => {
            dispath(addTableItem(newItem))
            setIsModalOpen(false)
        },
        [dispath],
    )

    const closeModal = useCallback(() => {
        setIsModalOpen(false)
    }, [])

    return (
        <div>
            <ButtonUI
                size={'large'}
                variant={'contained'}
                color={'info'}
                onClick={() => setIsModalOpen(true)}
                content={'Добавить запись'}
            />
            <ModalUI isOpen={isModalOpen} onClose={closeModal}>
                <TableForm addItem={addItem} />
            </ModalUI>
        </div>
    )
})
