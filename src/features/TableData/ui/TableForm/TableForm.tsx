import React, { memo, useState } from 'react'
import { Button, TextField } from '@mui/material'

import { ResponseDataType } from '../../model/types/dataType'

interface Props {
    addItem?: (doc: ResponseDataType) => void
    changeItem?: (id: string, doc: ResponseDataType) => void
    item?: ResponseDataType
}

const inputStyle = { width: '100%', marginBottom: '20px' }

export const TableForm: React.FC<Props> = memo((props) => {
    const { item, addItem, changeItem } = props

    const [docName, setDocName] = useState(item?.documentName || '')
    const [docType, setDocType] = useState(item?.documentType || '')
    const [docStatus, setDocStatsu] = useState(item?.documentStatus || '')
    const [empNumber, setEmpNumber] = useState(item?.employeeNumber || '')
    const [comSigName, setComSigName] = useState(item?.companySignatureName || '')
    const [comSigDate, setComSigDate] = useState(item?.companySigDate || '')
    const [empSigName, setEmpSigName] = useState(item?.employeeSignatureName || '')
    const [empSigDate, setEmpSigDate] = useState(item?.employeeSigDate || '')

    const newItem = {
        documentName: docName,
        documentType: docType,
        documentStatus: docStatus,
        employeeNumber: empNumber,
        companySignatureName: comSigName,
        companySigDate: comSigDate,
        employeeSignatureName: empSigName,
        employeeSigDate: empSigDate,
    }

    const addCompanySigDate = (e: string) => {
        setComSigName(e)
        if (e) {
            setComSigDate(new Date(Date.now()).toISOString())
        } else {
            setComSigDate('')
        }
    }

    const addEmployeeSigDate = (e: string) => {
        setEmpSigName(e)
        if (e) {
            setEmpSigDate(new Date(Date.now()).toISOString())
        } else {
            setEmpSigDate('')
        }
    }

    return (
        <div>
            <TextField
                required
                sx={inputStyle}
                value={docName}
                onChange={(e) => setDocName(e.target.value)}
                type="text"
                variant="standard"
                id="filled-size-small"
                label="Название документа"
            />
            <TextField
                required
                sx={inputStyle}
                value={docStatus}
                onChange={(e) => setDocStatsu(e.target.value)}
                type="text"
                variant="standard"
                id="filled-size-small"
                label="Статус документа"
            />
            <TextField
                sx={inputStyle}
                value={docType}
                onChange={(e) => setDocType(e.target.value)}
                type="text"
                variant="standard"
                id="filled-size-small"
                label="Тип документа"
            />
            <TextField
                sx={inputStyle}
                value={empNumber}
                onChange={(e) => setEmpNumber(e.target.value)}
                type="text"
                variant="standard"
                id="filled-size-small"
                label="Номер сотрудника"
            />
            <TextField
                sx={inputStyle}
                value={comSigName}
                onChange={(e) => addCompanySigDate(e.target.value)}
                type="text"
                variant="standard"
                id="filled-size-small"
                label="Подпись компании"
            />
            <TextField
                sx={inputStyle}
                value={empSigName}
                onChange={(e) => addEmployeeSigDate(e.target.value)}
                type="text"
                variant="standard"
                id="filled-size-small"
                label="Подпись сотрудника"
            />
            <Button
                disabled={!docName || !docStatus}
                onClick={addItem ? () => addItem(newItem) : () => changeItem(item.id, newItem)}
                size="large"
                variant={addItem ? 'contained' : 'outlined'}
                color="primary"
            >
                {addItem ? 'Добавить' : 'Изменить'}
            </Button>
        </div>
    )
})
