import React, { useCallback, useEffect, useState } from 'react'
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
    IconButton,
    CircularProgress,
    Box,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

import { getDataState } from '../../model/selectors/getDataState'
import { deleteTableItem, getTableData } from '../../model/slice/tableSlice'
import { AddItemForm } from '../AddItemForm/AddItemForm'
import { ChangeItemForm } from '../ChangeItemForm/ChangeItemForm'
import { columns } from 'shared/const/tableColumns'

const tableContainerStyle = { height: 600, marginTop: '50px' }
const tableStyle = { position: 'relative' }
const tableCellStyle = {
    width: '10%',
    textAlign: 'center',
    padding: '10px',
}
const typographyStyle = {
    position: 'absolute',
    top: '200%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
}

export const TableData = () => {
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
    const { data, isLoading, error } = useSelector(getDataState)

    const handleChangePage = useCallback((event: unknown, newPage: number) => {
        setPage(newPage)
    }, [])

    const handleChangeRowsPerPage = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(Number(event.target.value))
        setPage(0)
    }, [])

    const deleteItem = useCallback((id: string) => {
        dispatch(deleteTableItem(id))
    }, [])

    useEffect(() => {
        dispatch(getTableData())
    }, [dispatch])

    if (error) {
        alert(error)
    }

    return (
        <div>
            <AddItemForm />
            <TableContainer sx={tableContainerStyle}>
                <Table stickyHeader aria-label="sticky table" sx={tableStyle}>
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell sx={tableCellStyle} key={column.id}>
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    {isLoading ? (
                        <Box sx={typographyStyle}>
                            <CircularProgress />
                        </Box>
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
                                                <TableCell key={column.id} sx={tableCellStyle}>
                                                    {value}
                                                    {!value && (
                                                        <>
                                                            {column.id === 'changeData' && (
                                                                <ChangeItemForm item={item} />
                                                            )}
                                                            {column.id === 'deleteData' && (
                                                                <IconButton
                                                                    onClick={() =>
                                                                        deleteItem(item.id)
                                                                    }
                                                                    aria-label="delete"
                                                                >
                                                                    <DeleteIcon
                                                                        sx={{ color: '#E34234' }}
                                                                    />
                                                                </IconButton>
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
        </div>
    )
}
