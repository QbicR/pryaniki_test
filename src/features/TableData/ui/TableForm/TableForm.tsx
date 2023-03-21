import React, { memo, useCallback, useState } from 'react'

import { ResponseDataType } from '../../model/types/dataType'
import { Input } from 'shared/ui/Input/Input'
import { ButtonUI } from 'shared/ui/Button/ButtonUI'

interface Props {
    addItem?: (doc: ResponseDataType) => void
    changeItem?: (id: string, doc: ResponseDataType) => void
    item?: ResponseDataType
}

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

    const addCompanySigDate = useCallback((e: string) => {
        setComSigName(e)
        if (e) {
            setComSigDate(new Date(Date.now()).toISOString())
        } else {
            setComSigDate('')
        }
    }, [])

    const addEmployeeSigDate = useCallback((e: string) => {
        setEmpSigName(e)
        if (e) {
            setEmpSigDate(new Date(Date.now()).toISOString())
        } else {
            setEmpSigDate('')
        }
    }, [])

    return (
        <div>
            <Input
                value={docName}
                variant={'standard'}
                onChange={setDocName}
                label={'Название документа'}
                required={true}
            />
            <Input
                value={docStatus}
                variant={'standard'}
                onChange={setDocStatsu}
                label={'Статус документа'}
                required={true}
            />
            <Input
                value={docType}
                variant={'standard'}
                onChange={setDocType}
                label={'Тип документа'}
            />
            <Input
                value={empNumber}
                variant={'standard'}
                onChange={setEmpNumber}
                label={'Номер сотрудника'}
            />
            <Input
                value={comSigName}
                variant={'standard'}
                onChange={addCompanySigDate}
                label={'Подпись компании'}
            />
            <Input
                value={empSigName}
                variant={'standard'}
                onChange={addEmployeeSigDate}
                label={'Подпись сотрудника'}
            />
            <ButtonUI
                disabled={!docName || !docStatus}
                onClick={addItem ? () => addItem(newItem) : () => changeItem(item.id, newItem)}
                size={'large'}
                variant={addItem ? 'contained' : 'outlined'}
                color={'primary'}
                content={addItem ? 'Добавить' : 'Изменить'}
            />
        </div>
    )
})
