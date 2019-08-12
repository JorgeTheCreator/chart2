import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Movie from './Movie';
const URL = 'https://jsonplaceholder.typicode.com/todos/';


function MovieList(props) {
  const [data, setData] = useState({ data: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(URL);
      setData({ data: result.data });
    };
    fetchData();
  }, []);

  const x = data.data.map(movie => (
    <Grid item xs={6}>
    <Paper className={props.value}> <Movie key={movie.id + 1} title={movie.title} num={movie.userId}/></Paper>
  </Grid>
  ));
  console.log(x);
  return x; 
}
// {userId: 6, id: 101, title: "explicabo enim cumque porro aperiam occaecati minima", completed: false}
export default MovieList;



