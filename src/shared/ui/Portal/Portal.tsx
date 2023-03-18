import React, { ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface Props {
    children: ReactNode
    element?: HTMLElement
}

export const Portal: React.FC<Props> = (props) => {
    const { children, element = document.body } = props

    return createPortal(children, element)
}
