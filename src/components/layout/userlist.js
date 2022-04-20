
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useEffect,useState } from 'react';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
      getUserList();
  },[]);

  const getUserList = () =>{
      axios.get('http://192.168.43.252:8080/api/userOnboarding').then((response)=>{
        setUsers(response.data.userOnboardingList);
      });
  }

    return (
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>
                <span className="font-weight-600 font-size-16">
                     Name
                </span>
                </StyledTableCell>
            <StyledTableCell>
                <span className="font-weight-600 font-size-16">
                    Mobile
                </span>
                </StyledTableCell>
            <StyledTableCell >
                <span className="font-weight-600 font-size-16">
                    Email
                </span>
            </StyledTableCell>
            
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell >{row.userName}</StyledTableCell>
              <StyledTableCell >{row.mobile}</StyledTableCell>
              <StyledTableCell >{row.email}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
}

export default UserList;