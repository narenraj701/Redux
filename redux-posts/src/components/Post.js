import React from 'react'
import { Card, CardHeader, CardContent, CardActions, Button, makeStyles, Grid } from '@material-ui/core'
const useStyles=makeStyles({
  root:{
    border:'1px solid black',
    boxShadow: '5px 5px 10px grey'
  }
})
export const Post = ({ post ,view=true }) => {
  const classes=useStyles();
  return (
    <Grid container >
      <Grid item xs={2}>

      </Grid>
      <Grid item xs={8}>
      <Card className={classes.root}>
      <CardHeader title={post.title} />
      <CardContent >
        {post.body}
      </CardContent>
      {
        view && <CardActions >
        <Button color='secondary' variant='contained' onClick={event=>window.location.href=`/posts/${post.id}`}>
          View Post
        </Button>
      </CardActions>
      }
        
    </Card>
      </Grid>
      <Grid item xs={2}>

      </Grid>
    </Grid>
    
)
}