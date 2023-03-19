import { useState } from 'react'
import { Button } from '@mui/material'

import { LoginForm } from '../LoginForm/LoginForm'
import { ModalUI } from 'shared/ui/Modal/ModalUI'

export const UserAuth = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

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
                Войти
            </Button>
            <ModalUI isOpen={isModalOpen} onClose={closeModal}>
                <LoginForm />
            </ModalUI>
        </div>
    )
}
