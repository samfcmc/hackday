import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';
import CircularProgress from '@mui/material/CircularProgress';

type PayingDialogProps = { open: boolean }
const PayingDialog = (props: PayingDialogProps) => {
    const {
        open
    } = props
    
    return (
        <Dialog open={open}>
            <DialogTitle>Paying employees</DialogTitle>
            <DialogContent>
                <div className='flex flex-row w-full justify-center'>
                    <CircularProgress />
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default PayingDialog
