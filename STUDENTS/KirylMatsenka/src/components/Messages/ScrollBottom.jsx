import React from 'react'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Zoom from '@material-ui/core/Zoom'
import { makeStyles } from '@material-ui/core'

let useStyles = makeStyles(theme => ({
    root: {
      opacity: 0.9,
      position: 'fixed',
      bottom: theme.spacing (12),
      right: theme.spacing (11),
    },
  }))

let ScrollBottom = (props) => {
    let { children, window } = props
    let classes = useStyles()
    let trigger = useScrollTrigger ({
        target: props.scrollElement ? props.scrollElement : window,
    })

    if (props.scrollElement && props.scrollElement.scrollTop < 100) {    
        trigger = true
    } 

    let handleClick = e => {        
        let elements = e.currentTarget.parentNode.children
        let anchor = elements[elements.length - 2]
        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }

    return (
        <Zoom in={!trigger}>
            <div onClick={handleClick} className={classes.root}>
                {children}
            </div>
        </Zoom>
    )
}

export default ScrollBottom