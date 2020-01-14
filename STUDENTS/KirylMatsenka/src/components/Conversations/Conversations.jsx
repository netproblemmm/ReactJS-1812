import React, {Component} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

let useStyles = makeStyles (theme => ({
    paper: {
        textAlign: 'center'
    }
})) 

let conversations = (props) => {
    let classes = useStyles ()

    return (
        <Grid container item xs={3} alignItems={'center'}>
            <Paper className={classes.paper}>У нас нет бесед сейчас</Paper>
        </Grid>
    )
}

export default  conversations