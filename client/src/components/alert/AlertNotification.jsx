import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AlertNotification = ({againshowHandler,message, type}) => {
    const [open] = useState(true);
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        againshowHandler(true);
    };


  return (
    <>
        {message && <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>}
    </>
  )
}

export default AlertNotification;
