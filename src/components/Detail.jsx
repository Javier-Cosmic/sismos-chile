import React, {useContext} from "react";
import {Context} from "../App"
import Maps from "./Maps"
import credentials from '../credentials'
import Loading from "./Loading"
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  makeStyles,
  Typography
} from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '10px 20px',
  },
  gridItem: {
      padding: 15
  },
  [theme.breakpoints.down('xs')]:{
    root: {
      padding: 10
    },
    gridItem: {
      padding: 10
  },
  }
}));

const url = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.key}`

const Detail = () => {

  const {sismo} = useContext(Context)
  const classes = useStyles();

  return (
    <Grid container spacing={0} className={classes.root} >
      
      {sismo.map((sismo, i) => (
        
        <Grid key={i} item xs={12} sm={6} md={4} xl={3} className={classes.gridItem}>
          <Card>
            <CardHeader title='Ubicación Geográfica:' subheader={sismo.RefGeografica} />
            <CardContent>
            <Typography variant="subtitle1">
              Fecha: {sismo.Fecha}
            </Typography>

            </CardContent>
            <Maps 
              googleMapURL={url}
              containerElement={ <div style={{height: '350px'}}/>}
              mapElement={ <div style={{height: '100%'}}/>}
              isMarkerShown
              loadingElement={ <Loading /> }
              sismo={sismo}

            />
            <CardContent>
              <Typography color="error" variant="subtitle1">
                Magnitud: {sismo.Magnitud}
              </Typography>
              <Typography variant="subtitle1">
                Profundidad: {sismo.Profundidad}
              </Typography>
              <Typography variant="subtitle1">
                Agencia: {sismo.Agencia}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

      ))}

    </Grid>
  );
};

export default Detail;
