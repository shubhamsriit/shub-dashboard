
import * as React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


  
function Photos() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
      getUserList();
  },[]);

  const getUserList = () =>{
      axios.get('https://jsonplaceholder.typicode.com/photos').then((response)=>{
          console.log(response.data);
        setUsers(response.data);
      });
  }

    return (
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      {users.map((row) => (
          <Grid item xs={4}>
           <img src={row.url} width="200" />
        </Grid>
      ))}
        
       
      </Grid>
    </Box>
       )       
}

export default Photos;
