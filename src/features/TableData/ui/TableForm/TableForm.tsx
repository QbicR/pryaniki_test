import React, { useState } from 'react'
import { Button, TextField } from '@mui/material'

import { ResponseDataType } from '../../model/types/dataType'

interface Props {
    addItem?: (doc: ResponseDataType) => void
    changeItem?: (id: string, doc: ResponseDataType) => void
    item?: ResponseDataType
}

const inputStyle = { width: '100%', marginBottom: '20px' }

const TableForm: React.FC<Props> = (props) => {
    const { item, addItem, changeItem } = props

    const [docName, setDocName] = useState(item?.documentName || '')
    const [docType, setDocType] = useState(item?.documentType || '')
    const [docStatus, setDocStatsu] = useState(item?.documentStatus || '')
    const [comSigName, setComSigName] = useState(item?.companySignatureName || '')
    const [empNumber, setEmpNumber] = useState(item?.employeeNumber || '')
    const [empSigName, setEmpSigName] = useState(item?.employeeSignatureName || '')
    const [comSigDate, setComSigDate] = useState(
        item?.companySigDate || new Date(Date.now()).toISOString(),
    )
    const [empSigDate, setEmpSigDate] = useState(
        item?.employeeSigDate || new Date(Date.now()).toISOString(),
    )

    const newItem = {
        documentName: docName,
        documentType: docType,
        documentStatus: docStatus,
        companySignatureName: comSigName,
        employeeNumber: empNumber,
        employeeSignatureName: empSigName,
        companySigDate: comSigDate,
        employeeSigDate: empSigDate,
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
                onChange={(e) => setComSigName(e.target.value)}
                type="text"
                variant="standard"
                id="filled-size-small"
                label="Подпись компании"
            />
            <TextField
                sx={inputStyle}
                value={empSigName}
                onChange={(e) => setEmpSigName(e.target.value)}
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
}

export default TableForm
