import React from 'react'
import {Grid, makeStyles } from '@material-ui/core'

const useStyles=makeStyles({
  root:{
    backgroundColor:'blue',
    padding:0
  },
  link:{
    "&:hover":{
      cursor: 'pointer'
    },
    color:'white'
  }
})
export const Navbar = () => {
  const classes=useStyles();
  return (
    <Grid container className={classes.root} justify='center' spacing={3}>
    <Grid item >
      <h1 className={classes.link} onClick={event =>  window.location.href='/'}>Dashboard</h1>  
    </Grid>
    <Grid item>
     <h1 className={classes.link} onClick={event =>  window.location.href='/posts'}>Posts</h1>
    </Grid>
  </Grid>)
}
