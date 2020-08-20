import React from 'react'
import { Grid, Button } from '@material-ui/core';


const DashboardPage = () => {

    return (
      <Grid container direction="column" alignContent='center' spacing={3}>
        <Grid item>
          
        </Grid>
      <Grid item>
        <h1>Dashboard</h1>
      </Grid>
      <Grid item>
        <h2>This is the dashboard.</h2>
      </Grid>
      <Grid item>
        <Button color="primary" variant='contained' onClick={event =>  window.location.href='/posts'}>
            View Posts
        </Button>
      
      </Grid>    
      </Grid>
    
    

    
    )
}

export default DashboardPage