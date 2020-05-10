import React from 'react'
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress';
import makeStyles from "@material-ui/styles/makeStyles"

const useStyles = makeStyles({
    loading: {
        color: '#8C8C8C'
    }
})

export default () => {
    const classes = useStyles()
    return (
        <Box display="flex" mt={4} justifyContent="center">
            <CircularProgress className={classes.loading}/>
        </Box>
    )
}

