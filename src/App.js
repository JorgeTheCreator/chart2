import React from 'react';
import MovieList from './MovieList';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div className="App">
     <div className={classes.root}>
    <Grid container spacing={3}>
    <MovieList value={classes.paper} />
      </Grid>
    </div>
    </div>
  );
}

export default App;



