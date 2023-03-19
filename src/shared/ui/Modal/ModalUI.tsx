import React from 'react'
import { Box, Modal } from '@mui/material'

import { Portal } from 'shared/ui/Portal/Portal'

interface Props {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

const modalStyle = { display: 'flex', alignItems: 'center', justifyContent: 'center' }
const boxStyle = {
    width: 600,
    bgcolor: 'background.paper',
    border: '1px solid gray',
    borderRadius: '8px',
    boxShadow: 24,
    padding: '30px',
}

const ModalUI: React.FC<Props> = (props) => {
    const { isOpen, onClose, children } = props

    return (
        <Portal>
            <Modal
                sx={modalStyle}
                open={isOpen}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={boxStyle}>{children}</Box>
            </Modal>
        </Portal>
    )
}

export default ModalUI
