import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import CardNImage from '../../common/cards/cardNImage'
import { Box } from '@material-ui/core'

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

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <div className={classes.root}>
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
