import React from 'react'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Styles from './Styles.jsx'

let msg = (props) => {
    let classes = Styles (props)

    return (
        <Paper className={ classes.root }>
            <Box component="span" className={ classes.userMessage }>
                { props.msg.user }
            </Box>
            <Box component="span">
                { props.msg.body }
            </Box>
        </Paper>
    )
}

export default msg