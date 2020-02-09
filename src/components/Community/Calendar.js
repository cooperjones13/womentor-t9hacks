import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import EventIcon from '@material-ui/icons/Event';
import ScheduleIcon from '@material-ui/icons/Schedule';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, date, time, place, eventType) {
  return { name, date, time, place, eventType };
}

const rows = [
    createData('STEM Industry Career & Internship Fair', '02/06/20', '11AM', "UMC", "Career Fair"),
    createData('T9 HACKS', '02/07/20', '7PM', "ATLAS", "Hackathon"),
    createData('LGBQT+ Mixer Networking Night', '03/05/20', '4:30PM', "CASE", "Networking"),
    createData('Just In Time Career Fair', '04/02/20', '11AM', "UMC", "Career Fair"),
    createData('HackCU', '02/22/20', '8AM', 'BioTech', 'Hackathon')
];

export default function Calendar() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Event Name</TableCell>
            <TableCell align="right"><EventIcon/></TableCell>
            <TableCell align="right"><ScheduleIcon/></TableCell>
            <TableCell align="right"><LocationOnIcon/></TableCell>
            <TableCell align="right">Event Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.place}</TableCell>
              <TableCell align="right">{row.eventType}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
