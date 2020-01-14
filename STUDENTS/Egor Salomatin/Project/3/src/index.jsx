import React from 'react'
import ReactDOM from 'react-dom'
import Grid from '@material-ui/core/Grid'
import Messages from './components/Messages/Messages.jsx'
import Header from './components/Header/header.jsx'
import Chanels from './components/Chanels/Chanels.jsx'

let user = 'It'

ReactDOM.render (
   <React.Fragment >
      <Grid container spacing={3}>
         <Grid item container xs={12}>
            <Header/>
         </Grid>
         <Grid item xs={3}>
            <Chanels/>
         </Grid>
         <Grid item xs={9}>
            <h2>WhatsAcct</h2>
            <Messages user={ user }/>
         </Grid>
      </Grid>
   </React.Fragment>
   , document.getElementById('root'),
)
