import React, {useContext} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {withStyles, makeStyles} from "@material-ui/core/styles/";
import Switch from "@material-ui/core/Switch"
import {Context} from "../App"

const styles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    marginLeft: 15
  },
  [theme.breakpoints.down('xs')]:{
    title: {
      fontSize: 15
    }
  },
}))

const PurpleSwitch = withStyles({
  switchBase: {
    color: '#cfd8dc',
    '&$checked': {
      color: '#69f0ae',
    },
    '&$checked + $track': {
      backgroundColor: '#212121',
    },
  },
  checked: {},
  track: {},
})(Switch);

const Header = () => {

 const {darkMode, setDarkMode} = useContext(Context) 

 function getDate(){

      const date = new Date()
      const day = date.getDate()
      const month = date.getMonth()+1
      const year = date.getFullYear()
      
        const dia = '0' + day
        const mes = '0' + month
        const fecha = `${dia.slice(-2)}/${mes.slice(-2)}/${year}`

        return fecha
  }
  
  const changeDarkMode = () => {
    setDarkMode(!darkMode)
  }
  
  const classes = styles()

  return (
    <>
      <AppBar position="fixed" color="primary">
            <Toolbar>
              <Typography variant="h6" align="left" className={classes.title}>
                  Sismos en Chile - Última actualización {getDate()}
              </Typography>
              <PurpleSwitch color="primary" checked={darkMode} onChange={changeDarkMode} />
            </Toolbar>
          </AppBar>
      <Toolbar />
    </>
  )
}

export default Header;
