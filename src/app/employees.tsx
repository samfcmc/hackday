import Button from '@mui/material/Button'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const EMPLOYEES = [
    {
        id: '1',
        name: 'Dale',
        salary: '1000',
        wallet: '0xEb96Bb46e1A422E5F64e2A1651e2e53a98915173'
    },
    {
        id: '2',
        name: 'Francesco',
        salary: '2000',
        wallet: '0x7899aF486E73b5b0019e57F145084E76D90eA572'
    },
    {
        id: '3',
        name: 'Samuel',
        salary: '2000',
        wallet: '0x6D7815F73e3c8B57A3EfA744cDa5958114ef6624'
    },
]

const Employees = () => { 
    return (
        <article>
            <div className='flex flex-row justify-between'>
                <div>Employees</div>
                <Button variant='outlined' color='success'>Pay</Button>
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
        </article>
    )
}

export default Employees