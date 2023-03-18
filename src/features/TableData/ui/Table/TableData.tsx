import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import {
    TableBody,
    TableCell,
    Table,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Button,
} from '@mui/material'

import { getDataState } from '../../model/selectors/getDataState'
import { deleteTableItem, getTableData } from '../../model/slice/tableSlice'
import TableForm from '../TableForm/TableForm'
import ModalUI from 'shared/ui/Modal/ModalUI'
import { columns } from 'shared/const/tableColumns'

export const TableData = () => {
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [tableItem, setTableItem] = useState({})
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
    const { data, isLoading, error } = useSelector(getDataState)

    console.log(data, isLoading, error)

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const openModal = (item: any) => {
        setIsModalOpen(true)
        setTableItem(item)
    }

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    const deleteItem = (id: string) => {
        dispatch(deleteTableItem(id))
    }

    useEffect(() => {
        dispatch(getTableData())
    }, [dispatch])

    if (error) {
        alert(error)
    }

    return (
        <div>
            <TableContainer sx={{ height: 540 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell key={column.id}>{column.label}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    {isLoading ? (
                        <h1>loaging...</h1>
                    ) : (
                        <TableBody>
                            {data
                                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                ?.map((item) => (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={item.id}>
                                        {columns.map((column) => {
                                            // @ts-ignore
                                            const value = item[column.id]
                                            return (
                                                <TableCell key={column.id}>
                                                    {value}
                                                    {!value && (
                                                        <>
                                                            {column.id === 'changeData' && (
                                                                <Button
                                                                    onClick={() => openModal(item)}
                                                                >
                                                                    И
                                                                </Button>
                                                            )}
                                                            {column.id === 'deleteData' && (
                                                                <Button
                                                                    onClick={() =>
                                                                        deleteItem(item.id)
                                                                    }
                                                                >
                                                                    У
                                                                </Button>
                                                            )}
                                                        </>
                                                    )}
                                                </TableCell>
                                            )
                                        })}
                                    </TableRow>
                                ))}
                        </TableBody>
                    )}
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25]}
                component="div"
                count={data ? data?.length : 1}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <ModalUI isOpen={isModalOpen} onClose={closeModal}>
                <TableForm tableItem={tableItem} onClose={closeModal} />
            </ModalUI>
        </div>
    )
}
