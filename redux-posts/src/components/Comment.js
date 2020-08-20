import React from 'react'
import { makeStyles, Grid, Card, CardHeader, CardContent } from '@material-ui/core'
const useStyles=makeStyles({
  root:{
    border:'1px solid black',
    boxShadow: '5px 5px 10px grey'
  }
})

export const Comment = ({ comment }) => {
  const classes=useStyles();
  return (
    <Grid container >
      <Grid item xs={2}>

      </Grid>
      <Grid item xs={8}>
      <Card className={classes.root}>
      <CardHeader title={comment.title} />
      <CardContent >
        {comment.body}
      </CardContent>  
    </Card>
      </Grid>
      <Grid item xs={2}>

      </Grid>
    </Grid>
    
)
}
