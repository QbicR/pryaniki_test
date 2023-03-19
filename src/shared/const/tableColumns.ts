interface ColumnsProps {
    id: string
    label: string
}

export const columns: readonly ColumnsProps[] = [
    {
        id: 'documentName',
        label: 'Название документа',
    },
    {
        id: 'documentStatus',
        label: 'Статус документа',
    },
    {
        id: 'documentType',
        label: 'Тип документа',
    },
    {
        id: 'employeeNumber',
        label: 'Номер сотрудника',
    },
    {
        id: 'companySignatureName',
        label: 'Подпись компании',
    },
    {
        id: 'companySigDate',
        label: 'Дата подписи компании',
    },
    {
        id: 'employeeSignatureName',
        label: 'Подпись сотрудника',
    },
    {
        id: 'employeeSigDate',
        label: 'Дата подписи сотрудника',
    },
    {
        id: 'changeData',
        label: 'Изменить запись',
    },
    {
        id: 'deleteData',
        label: 'Удалить запись',
    },
]
