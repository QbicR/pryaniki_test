import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { Button, TextField } from '@mui/material'

import { changeTableItem } from '../../model/slice/tableSlice'

interface Props {
    tableItem?: any
    onClose: () => void
}

const TableForm: React.FC<Props> = (props) => {
    const { tableItem, onClose } = props
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

    const [docName, setDocName] = useState(tableItem.documentName || '')
    const [docType, setDocType] = useState(tableItem.documentType || '')
    const [docStatus, setDocStatsu] = useState(tableItem.documentStatus || '')
    const [comSigName, setComSigName] = useState(tableItem.companySignatureName || '')
    const [empNumber, setEmpNumber] = useState(tableItem.employeeNumber || '')
    const [empSigName, setEmpSigName] = useState(tableItem.employeeSignatureName || '')

    const doc = {
        documentName: docName,
        documentType: docType,
        documentStatus: docStatus,
        companySignatureName: comSigName,
        employeeNumber: empNumber,
        employeeSignatureName: empSigName,
        // companySigDate: new Date(Date.now()).toISOString(),
        // employeeSigDate: new Date(Date.now()).toISOString(),
    }

    const changeItem = () => {
        console.log(doc)

        dispatch(changeTableItem(tableItem.id, doc))
        onClose()
    }

    return (
        <div>
            <TextField
                sx={{ width: '100%', marginBottom: '20px' }}
                value={docName}
                onChange={(e) => setDocName(e.target.value)}
                type="text"
                variant="filled"
                id="filled-size-small"
                label="Название документа"
            />
            <TextField
                sx={{ width: '100%', marginBottom: '20px' }}
                value={docType}
                onChange={(e) => setDocType(e.target.value)}
                type="text"
                variant="filled"
                id="filled-size-small"
                label="Тип документа"
            />
            <TextField
                sx={{ width: '100%', marginBottom: '20px' }}
                value={docStatus}
                onChange={(e) => setDocStatsu(e.target.value)}
                type="text"
                variant="filled"
                id="filled-size-small"
                label="Статус документа"
            />
            <TextField
                sx={{ width: '100%', marginBottom: '20px' }}
                value={comSigName}
                onChange={(e) => setComSigName(e.target.value)}
                type="text"
                variant="filled"
                id="filled-size-small"
                label="Подпись компании"
            />
            <TextField
                sx={{ width: '100%', marginBottom: '20px' }}
                value={empNumber}
                onChange={(e) => setEmpNumber(e.target.value)}
                type="text"
                variant="filled"
                id="filled-size-small"
                label="Номер сотрудника"
            />
            <TextField
                sx={{ width: '100%', marginBottom: '20px' }}
                value={empSigName}
                onChange={(e) => setEmpSigName(e.target.value)}
                type="text"
                variant="filled"
                id="filled-size-small"
                label="Подпись сотрудника"
            />
            <Button onClick={changeItem} size="large" variant="outlined" color="primary">
                Изменить
            </Button>
        </div>
    )
}

export default TableForm
