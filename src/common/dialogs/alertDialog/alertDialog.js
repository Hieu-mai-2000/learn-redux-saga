import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

export default function AlertDialog(props) {
  const { isOpen, handleDelete } = props

  const submitDelete = ()=>{
    handleDelete(false)
    alert('delete successfully!!!')
  }

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={() => handleDelete(false)}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'>{'Delete file!!!'}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Do you want to delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleDelete(false)} color='primary'>
            Cancel
          </Button>
          <Button onClick={submitDelete} color='warning' autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
