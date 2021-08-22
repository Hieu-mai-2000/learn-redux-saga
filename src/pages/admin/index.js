import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import CardNImage from '../../common/cards/cardNImage'
import { Box, Button } from '@material-ui/core'
import DialogInput from '../../common/dialogs/dialogInput/dialogInput'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as taskAction from '../../actions/task'
import Loading from '../../common/GlobalLoading/loading'
import InputSearch from '../../common/input/inputSearch/inputSearch'

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

function TodoTasks(props) {
  const classes = useStyles()
  const [isDialogCreate, setIsDialogCreate] = useState(false)
  const { listTask } = props

  const handleCreate = (isOpen) => {
    setIsDialogCreate(isOpen)
  }

  useEffect(() => {
    const { taskActionCreator } = props
    const { fetchTask } = taskActionCreator
    fetchTask()
  }, [])

  return (
    <React.Fragment>
      <CssBaseline />
      <DialogInput isOpen={isDialogCreate} handleEdit={handleCreate} />
      <Loading/>
      <Container fixed>
        <div className={classes.root}>
          <Button
            variant='contained'
            color='primary'
            onClick={() => handleCreate(true)}>
            Create
          </Button>
<InputSearch/>
          <Grid container spacing={3}>
            <Grid item xs>
              <h1>TODO</h1>
              {listTask.map((task,index) => {
                if (task.state % 3 === 0) {
                  return (
                    <Box mt={1}>
                      <CardNImage key={index} title={task.title} content={task.content} />
                    </Box>
                  )
                }
                return null
              })}
            </Grid>
            <Grid item xs>
              <h1>DOING</h1>
              {listTask.map((task,index) => {
                if (task.state % 3 === 1) {
                  return (
                    <Box mt={1}>
                      <CardNImage key={index} title={task.title} content={task.content} />
                    </Box>
                  )
                }
                return null
              })}
            </Grid>
            <Grid item xs>
              <h1>DONE</h1>
              {listTask.map((task,index) => {
                if (task.state % 3 === 2) {
                  return (
                    <Box mt={1}>
                      <CardNImage key={index} title={task.title} content={task.content} />
                    </Box>
                  )
                }
                return null
              })}
            </Grid>
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    listTask: state.task.listTask,
  }
}
const mapDisPatchToProps = (dispatch) => {
  return {
    taskActionCreator: bindActionCreators(taskAction, dispatch),
  }
}

export default connect(mapStateToProps, mapDisPatchToProps)(TodoTasks)
