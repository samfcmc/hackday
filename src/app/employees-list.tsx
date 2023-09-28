'use client';

import Button from '@mui/material/Button'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useFetch } from '@/app/hooks/useFetch'
import { EMPLOYEES } from '@/app/constants/employees'
import { useAccount } from 'wagmi'
import PayingDialog from '@/app/dialog/paying';
import ErrorDialog from '@/app/dialog/error';
import { useState } from 'react'

const Employees = () => { 
    const [paying, setPaying] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const doFetch = useFetch()
    const { isConnected } = useAccount()

    const onPay = async () => {
        setPaying(true)
        try {
            await doFetch('/api/pay', { method: 'POST' })
            setError(null)
        } catch(e) {
            setError((e as { message: string }).message || 'Unknown error')
        } finally {
            setPaying(false)
        }
    }

    return (
        <article>
            <div className='flex flex-row justify-between'>
                <div>Employees</div>
                <Button variant='outlined' color='success' disabled={!isConnected} onClick={onPay}>Pay</Button>
            </div>
            <div className='w-full mt-2'>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Salary</TableCell>
                            <TableCell align="right">Wallet</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {EMPLOYEES.map(({ id, name, salary, wallet }) => (
                            <TableRow
                                key={id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {id}
                                </TableCell>
                                <TableCell align="right">{name}</TableCell>
                                <TableCell align="right">{salary}</TableCell>
                                <TableCell align="right"><a href={`https://sepolia.etherscan.io/address/${wallet}`} className='underline'>{wallet}</a></TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <PayingDialog open={paying} />
            <ErrorDialog open={!!error} errorMessage={error} onClose={() => {
                setError(null)
            }}/>
        </article>
    )
}

export default Employees