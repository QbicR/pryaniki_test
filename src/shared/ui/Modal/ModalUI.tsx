import React from 'react'
import { Box, Typography, Modal } from '@mui/material'

import { Portal } from 'shared/ui/Portal/Portal'

interface Props {
    isOpen: boolean
    onClose: () => void
    children: any
}

const ModalUI: React.FC<Props> = (props) => {
    const { isOpen, onClose, children } = props

    return (
        <Portal>
            <Modal
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                open={isOpen}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        width: 400,
                        bgcolor: 'background.paper',
                        border: '1px solid #000',
                        borderRadius: '8px',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    {children}
                </Box>
            </Modal>
        </Portal>
    )
}

export default ModalUI
