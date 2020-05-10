import React from 'react'
import {AppBar, makeStyles, Typography} from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
    root: {
        top: 'auto',
        bottom: 0,
        padding: 5
    }
}));

const Footer = () => {

    const classes = useStyles()

        return (
            <div>
                <AppBar color="secondary" position="fixed" className={classes.root}>
                     <Typography variant="caption" align="center">
                         Datos obtenidos del CENTRO SISMOLÓGICO NACIONAL.
                     </Typography>
                </AppBar>
            </div>
        )

}

export default Footer
