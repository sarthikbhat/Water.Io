import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { blue } from '@material-ui/core/colors';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    backgroundColor:'skyblue'
    
  },
  table: {
    minWidth: 700,
    height:'400px'
  },
});

let id = 0;
function createData(name,link,date) {
  id += 1;
  return { id, name,link,date};
}

const rows = [
  createData('Tender Notice for Sale of Old & used misc tems of Cauvery Water Disputes Tribunal','http://mowr.gov.in/%20CWDT-Sep2018.pdf', 'last Date : 18-09-2018'),
  createData('Short term tender notice for auction of old & used miscellaneous items in Vansadhara Water Disputes Tribunal','http://mowr.gov.in/%20Tender_Document_VWDT_Sep_2018_1.pdf','Last date : 10-12-2018'),
  createData('Short term tender notice for auction of old & used T&P and miscellaneous items in Cauvery Water Disputes Tribunal','http://mowr.gov.in/sites/default/files/CWDT-Sep2018.pdf','Last date : 10-10-2018'),
  createData('Short term tender notice for auction of old & used T&P and miscellaneous items in Cauvery Water Disputes Tribunal','http://mowr.gov.in/%20Tender_CWDT_Oct_2018.pdf','Last date : 10-10-2018'),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
              <a href={row.link} target="_blank" style={{color:"Black" , textDecorationLine: "underline"}} >
                {row.name}
                </a>
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
