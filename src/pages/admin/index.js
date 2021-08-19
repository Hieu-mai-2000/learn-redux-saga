import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import CardNImage from '../../common/cards/cardNImage'
import { Box, Button } from '@material-ui/core'
import DialogInput from '../../common/dialogs/dialogInput/dialogInput'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

export default function AutoGrid() {
  const classes = useStyles()
  const [isDialogCreate,setIsDialogCreate] = useState(false)

  const handleCreate = (isOpen)=>{
    setIsDialogCreate(isOpen)
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <DialogInput isOpen={isDialogCreate} handleEdit={handleCreate} />
      <Container fixed>
        <div className={classes.root}>
          <Button
            variant='contained'
            color='primary'
            onClick={() => handleCreate(true)}>
            Create
          </Button>
          <Grid container spacing={3}>
            <Grid item xs>
              <h1>TODO</h1>
              <Box mt={1}>
                <CardNImage />
              </Box>
            </Grid>
            <Grid item xs>
              <h1>DOING</h1>
              <Box mt={1}>
                <CardNImage />
              </Box>
            </Grid>
            <Grid item xs>
              <h1>DONE</h1>
              <Box mt={1}>
                <CardNImage />
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  )
}
