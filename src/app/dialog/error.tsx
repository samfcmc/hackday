import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { ReactNode } from 'react'

type ErrorDialogProps = { open: boolean, errorMessage: ReactNode, onClose: () => void }
const ErrorDialog = (props: ErrorDialogProps) => {
    const {
        open, 
        errorMessage,
        onClose,
    } = props
    
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle color="error">Error</DialogTitle>
            <DialogContent>
                {errorMessage}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    )
}

export default ErrorDialog
