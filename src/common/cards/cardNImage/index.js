import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { Grid } from '@material-ui/core'
import DialogInput from '../../dialogs/dialogInput/dialogInput'
import AlertDialog from '../../dialogs/alertDialog/alertDialog'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
})

export default function CardNImage() {
  const classes = useStyles()
  const [openAlertDelete,setOpenAlertDelete] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  
  const handleAlertDelete = (isOpen)=>{
    setOpenAlertDelete(isOpen)
  }

  const handleEdit = (isOpen)=>{
    setOpenEdit(isOpen)
  }

  return (
    <Card className={classes.root}>
      <DialogInput isOpen={openEdit} handleEdit={handleEdit} />
      <AlertDialog isOpen={openAlertDelete} handleDelete={handleAlertDelete} />
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            Lizard
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Lizards are a widespread group of squame reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid
          container
          direction='row'
          justifyContent='flex-end'
          alignItems='center'
          spacing={1}>
          <Grid item>
            <EditIcon onClick={() => setOpenEdit(true)} />
          </Grid>
          <Grid item>
            <DeleteIcon onClick={() => setOpenAlertDelete(true)} />
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  )
}
