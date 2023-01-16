import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ceasca from './ceasca.jpg'
import ceasca2 from './ceasca2.jpg'
import ceasca3 from './ceasca3.jpg'
import ceasca4 from './ceasca4.jpg'
import Css from './Radu.css'


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Espresso  1,60 €' ,'Kopi Luwak 10,50 €' ,'Soya 1,50 €' , 'Pistachio Muffin  5,00 €'),
  createData('Double Espresso 2,60 €' , 'Jamaican Blue Mount. 8,50 €' , 'Oat 2,50 €' , 'Coulant 4,50 €' ),
  createData('Brewed Coffee 2,20 €' , 'Yemen 5,50 €' , 'Almond 2,50 €' , 'Black Forest Cake 5,50 €'),
  createData('American Coffee 2,50 €' , 'Zimbabwe 6,00 €', 'Coconut 3,0 €' , 'Crispy Cake '),
  createData('Macchiato 1,80 €' , 'Mocha Java 4,00 €' , 'Rice'),
  createData('Latte 2,50 €' , 'Guatemala Coban'),
  createData('Cappuccino'),
];

export default function Radu() {
  return (
    <div className='Menu'>
      <div className='Title' align="center"><h1>MENU</h1></div>
    <TableContainer  component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table" >
        <TableHead>
          <TableRow>
            <TableCell ><h2 >OUR BASICS</h2></TableCell>
            <TableCell align="right"><h2>OUR SPECIALS</h2></TableCell>
            <TableCell align="right"><h2>OUR DAIRY FREE MILKS</h2></TableCell>
            <TableCell align="right"><h2>TO PAIR WITH...</h2></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" align='right ' >
                {row.name}
              </TableCell>
              <TableCell align='right' >{row.calories}</TableCell>
              <TableCell align='right' >{row.fat}</TableCell>
              <TableCell align='right' >{row.carbs}</TableCell>
              <TableCell align='right'>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className='image' >
    <img src={ceasca} alt="Logo" />
    <img src={ceasca2} alt="Logo" />
    <img src={ceasca3} alt="Logo" />
    <img src={ceasca4} alt="Logo" />
    </div>
    </TableContainer>
    </div>
  );
}