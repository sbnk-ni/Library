import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { MdOutlineSearchOff } from 'react-icons/md';
import '../styles/mainTable.css';

  export default function MainTable(props) {

    const {data} = props;
    console.log(data);

    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [page, setPage] = React.useState(0);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
    return (
      <Paper sx={{ width: '100%' }} id="Paper">
      <TableContainer >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell id="head">Title</TableCell>
              <TableCell align="left" id="head">Author</TableCell>
              <TableCell align="left" id="head">Language</TableCell>
              <TableCell align="left" id="head">Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody id="content">
            {
                //display "No result found" if search result is empty
                data.length === 0 ?
                <div className='no-result'>
                <MdOutlineSearchOff style={{ fontSize: "3vmax" }} />
                <p>No result found</p>
                </div>
                :
                data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data) => (
              <TableRow key={data.id}>
                <TableCell id="content" align="left">{data.title}</TableCell>
                <TableCell id="content" align="left">{data.author}</TableCell>
                <TableCell id="content"  align="left">{data.language}</TableCell>
                <TableCell id="content" align="left">{data.year}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
       <TablePagination id="head"
       rowsPerPageOptions={[5, 10, 25]}
       component="div"
       count={data.length}
       rowsPerPage={rowsPerPage}
       page={page}
       onPageChange={handleChangePage}
       onRowsPerPageChange={handleChangeRowsPerPage}
     />
     </Paper>
     
    );
  }